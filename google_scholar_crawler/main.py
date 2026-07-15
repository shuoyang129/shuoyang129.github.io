from scholarly import scholarly, ProxyGenerator
import json
from datetime import datetime
import os
import sys
import traceback


def _patch_free_proxy_api():
    """scholarly 1.7.11 calls get_proxy_list() with no args; free-proxy>=1.1 needs repeat."""
    try:
        from fp.fp import FreeProxy
    except Exception:
        return

    original = FreeProxy.get_proxy_list

    def compatible_get_proxy_list(self, *args, **kwargs):
        if args or "repeat" in kwargs:
            return original(self, *args, **kwargs)
        try:
            return original(self, False)
        except TypeError:
            return original(self)

    FreeProxy.get_proxy_list = compatible_get_proxy_list


def try_use_free_proxies():
    _patch_free_proxy_api()
    try:
        pg = ProxyGenerator()
        pg.FreeProxies()
        scholarly.use_proxy(pg)
        print("Using FreeProxies")
        return True
    except Exception as exc:
        print(f"FreeProxies unavailable ({exc}); trying without proxy")
        return False


def fetch_author():
    author = scholarly.search_author_id(os.environ["GOOGLE_SCHOLAR_ID"])
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
    author["updated"] = str(datetime.now())
    author["publications"] = {v["author_pub_id"]: v for v in author["publications"]}
    return author


def write_results(author):
    print(json.dumps(author, indent=2))
    os.makedirs("results", exist_ok=True)
    with open("results/gs_data.json", "w", encoding="utf-8") as outfile:
        json.dump(author, outfile, ensure_ascii=False)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": f"{author['citedby']}",
    }
    with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as outfile:
        json.dump(shieldio_data, outfile, ensure_ascii=False)


def main():
    attempts = []
    if try_use_free_proxies():
        attempts.append("free-proxies")
    attempts.append("direct")

    last_error = None
    for mode in attempts:
        try:
            if mode == "direct":
                # Clear any previous proxy setup and try a plain session.
                scholarly.use_proxy(ProxyGenerator())
                print("Trying direct Google Scholar fetch")
            author = fetch_author()
            write_results(author)
            print(f"Citation crawl succeeded via {mode}")
            return
        except Exception as exc:
            last_error = exc
            print(f"Citation crawl failed via {mode}: {exc}")
            traceback.print_exc()

    # Google often blocks GitHub Actions IPs; keep previous google-scholar-stats
    # data and exit successfully so the workflow stays green.
    err_name = type(last_error).__name__ if last_error else "unknown"
    print(f"Could not fetch Google Scholar data ({err_name}). Keeping previous citation stats.")
    sys.exit(0)


if __name__ == "__main__":
    main()
