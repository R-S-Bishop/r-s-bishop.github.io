// Nav: Resources dropdown — caret-only toggle, word links to hub; mobile toggle
(function () {
  var caret = document.querySelector('.site-nav__caret-btn');
  var dropdown = document.querySelector('.site-nav__dropdown');

  if (caret && dropdown) {
    caret.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open', !isOpen);
      caret.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
      if (caret) caret.setAttribute('aria-expanded', 'false');
    });

    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Mobile nav toggle
  var mobileToggle = document.querySelector('.site-nav__toggle');
  var navLinks = document.querySelector('.site-nav__links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }
})();
