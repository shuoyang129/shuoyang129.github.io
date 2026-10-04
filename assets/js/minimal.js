(function () {
  'use strict';

  /* ---------- Dark mode toggle ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('ml-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Mobile: move nav out of the header so it can stick ---------- */
  var nav = document.querySelector('.ml-nav');
  var profile = document.querySelector('.ml-profile');
  var card = document.querySelector('.ml-profile__card');
  var mq = window.matchMedia('(max-width: 820px)');
  function placeNav() {
    if (!nav || !profile || !card) return;
    if (mq.matches) {
      if (nav.parentNode === card) profile.parentNode.insertBefore(nav, profile.nextSibling);
    } else if (nav.parentNode !== card) {
      card.insertBefore(nav, card.querySelector('.ml-tools'));
    }
  }
  placeNav();
  if (mq.addEventListener) mq.addEventListener('change', placeNav);
  else if (mq.addListener) mq.addListener(placeNav);

  /* ---------- Scroll-spy ---------- */
  var links = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[data-target]')) : [];
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute('data-target')); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('data-target') === id;
      a.classList.toggle('is-active', on);
      if (on && mq.matches && a.scrollIntoView) {
        var navRect = nav.getBoundingClientRect();
        var r = a.getBoundingClientRect();
        if (r.left < navRect.left || r.right > navRect.right) {
          nav.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
        }
      }
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var offset = mq.matches ? 90 : 40;
      var current = sections.length ? sections[0].id : null;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top - offset <= 0) current = sections[i].id;
      }
      // At the very bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && sections.length) {
        current = sections[sections.length - 1].id;
      }
      if (current) setActive(current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- BibTeX expand (fetches the .bib file on first click) ---------- */
  document.querySelectorAll('[data-bib]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pub = btn.closest('.ml-pub__body');
      var box = pub && pub.querySelector('.ml-bibtex');
      if (!box) return;
      if (box.classList.contains('is-open')) {
        box.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        return;
      }
      var show = function () {
        box.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      };
      if (box.textContent.trim()) return show();
      fetch(btn.getAttribute('data-bib'))
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (t) { box.textContent = t.trim(); show(); })
        .catch(function () { window.open(btn.getAttribute('data-bib'), '_blank'); });
    });
  });

  /* ---------- Show more publications: reveal `step` more per click ---------- */
  document.querySelectorAll('.ml-more-toggle').forEach(function (btn) {
    var list = document.getElementById(btn.getAttribute('aria-controls'));
    if (!list) return;
    var step = parseInt(list.getAttribute('data-step'), 10) || 5;
    var items = Array.prototype.slice.call(list.children);
    // Text-only papers: revealed together with the last batch of selected papers
    var extra = document.getElementById(btn.getAttribute('data-extra'));

    var label = btn.querySelector('.ml-more-toggle__label') || btn;

    function update() {
      var allShown = items.every(function (li) { return !li.hidden; });
      if (extra) extra.hidden = !allShown;
      label.textContent = btn.getAttribute(allShown ? 'data-less' : 'data-more');
      btn.setAttribute('aria-expanded', String(allShown));
    }

    btn.addEventListener('click', function () {
      var hiddenItems = items.filter(function (li) { return li.hidden; });
      if (hiddenItems.length) {
        hiddenItems.slice(0, step).forEach(function (li) { li.hidden = false; });
      } else {
        // Everything is shown: collapse back to the first `step` papers
        items.forEach(function (li, i) { li.hidden = i >= step; });
        var sec = document.getElementById('publications');
        if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      update();
    });
    update();
  });

  /* ---------- External links open in new tab ---------- */
  document.querySelectorAll('.ml-content a[href^="http"]').forEach(function (a) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
})();
