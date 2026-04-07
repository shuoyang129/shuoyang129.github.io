(function () {
  function applyExternalBlank(anchor) {
    var h = anchor.getAttribute('href');
    if (!h || h.indexOf('mailto:') === 0 || h === '#' || h.indexOf('#') === 0) return;
    if (h.indexOf('http://') === 0 || h.indexOf('https://') === 0 || h.indexOf('/') === 0) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function walkUntilNextH1(heading) {
    if (!heading) return;
    var el = heading.nextElementSibling;
    while (el && el.tagName !== 'H1') {
      el.querySelectorAll('a').forEach(applyExternalBlank);
      el = el.nextElementSibling;
    }
  }

  function init() {
    document.querySelectorAll('.news-scroll a').forEach(applyExternalBlank);

    walkUntilNextH1(document.getElementById('publications'));
    walkUntilNextH1(document.getElementById('educations'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
