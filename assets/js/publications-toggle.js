(function () {
  function initPublicationsToggle() {
    document.querySelectorAll('.publications-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('aria-controls');
        var more = id ? document.getElementById(id) : null;
        if (!more) return;
        var moreLabel = btn.getAttribute('data-label-more') || 'Show more';
        var lessLabel = btn.getAttribute('data-label-less') || 'Show less';
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          more.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = moreLabel;
        } else {
          more.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = lessLabel;
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationsToggle);
  } else {
    initPublicationsToggle();
  }
})();
