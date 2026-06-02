// Strip EmailOctopus injected Bootstrap padding/sizing after the form renders.
// Inline styles beat all stylesheets, including async-injected ones.
(function () {
  function applyFix() {
    var nc = document.querySelector('.nurture-container');
    if (!nc) return;

    // Remove Bootstrap utility padding from the container chain
    ['.align-mid', '.p-3', '.pt-5', '.pb-5', '.inline-container',
     '.emailoctopus-form-wrapper', '.emailoctopus-form-default']
      .forEach(function (sel) {
        nc.querySelectorAll(sel).forEach(function (el) {
          el.style.setProperty('padding', '0', 'important');
          el.style.setProperty('padding-top', '0', 'important');
          el.style.setProperty('padding-bottom', '0', 'important');
          el.style.setProperty('padding-left', '0', 'important');
          el.style.setProperty('padding-right', '0', 'important');
          el.style.setProperty('background', 'transparent', 'important');
          el.style.setProperty('border', 'none', 'important');
          el.style.setProperty('box-shadow', 'none', 'important');
          el.style.setProperty('max-width', 'none', 'important');
        });
      });

    // Force the form wrapper to fill the nurture-container width explicitly
    var wrapper = nc.querySelector('.emailoctopus-form-wrapper');
    if (wrapper) {
      wrapper.style.setProperty('width', nc.offsetWidth + 'px', 'important');
    }
    var form = nc.querySelector('.emailoctopus-form');
    if (form) {
      form.style.setProperty('width', '100%', 'important');
      form.style.setProperty('max-width', 'none', 'important');
    }

    // Force full-width on the fields container and make fields go side-by-side
    var fc = nc.querySelector('[eo-form-fields-container]');
    if (fc) {
      fc.style.setProperty('display', 'flex', 'important');
      fc.style.setProperty('flex-direction', 'row', 'important');
      fc.style.setProperty('flex-wrap', 'wrap', 'important');
      fc.style.setProperty('gap', '10px', 'important');
      fc.style.setProperty('width', '100%', 'important');
    }

    // Compact form rows
    nc.querySelectorAll('.emailoctopus-form-row').forEach(function (el) {
      el.style.setProperty('margin', '0', 'important');
      el.style.setProperty('padding', '0', 'important');
    });

    // Shorten placeholder text so it fits the field
    var emailInput = nc.querySelector('input[type="email"]');
    if (emailInput) emailInput.placeholder = 'Email address';
    var nameInput = nc.querySelector('input[type="text"]:not([tabindex="-1"])');
    if (nameInput) nameInput.placeholder = 'First name';
  }

  // Run once form has rendered (async script — poll briefly)
  var tries = 0;
  var interval = setInterval(function () {
    if (document.querySelector('.nurture-container .emailoctopus-form') || ++tries > 40) {
      clearInterval(interval);
      applyFix();
    }
  }, 150);
})();
