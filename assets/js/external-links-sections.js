(function () {
  function applyExternalBlank(anchor) {
    var h = anchor.getAttribute('href');
    if (!h || h.indexOf('mailto:') === 0) return;
    if (h.indexOf('http://') === 0 || h.indexOf('https://') === 0) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function init() {
    document.querySelectorAll('.news-scroll a').forEach(applyExternalBlank);

    var eduHeading = document.getElementById('educations');
    if (eduHeading) {
      var el = eduHeading.nextElementSibling;
      while (el && el.tagName !== 'H1') {
        el.querySelectorAll('a').forEach(applyExternalBlank);
        el = el.nextElementSibling;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
