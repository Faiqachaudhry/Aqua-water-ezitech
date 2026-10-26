document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menuBtn');
  var navList = document.getElementById('navList');
  var links = navList.querySelectorAll('a');

  function closeMenu() {
    navList.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  menuBtn.addEventListener('click', function () {
    var open = navList.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  links.forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  document.getElementById('year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('show'); revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { navObs.observe(s); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('show'); });
  }

  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  var fields = ['name', 'email', 'subject', 'message'];

  // Simple email check without regular expressions
  function isValidEmail(v) {
    var at = v.indexOf('@');
    var dot = v.lastIndexOf('.');
    return at > 0 && dot > at + 1 && dot < v.length - 1 && v.indexOf(' ') === -1 && v.indexOf('@', at + 1) === -1;
  }
  function getError(id, v) {
    if (v === '') return 'Please enter your ' + id + '.';
    if (id === 'email' && !isValidEmail(v)) return 'Please enter a valid email address, e.g. name@example.com.';
    if (id === 'message' && v.length < 10) return 'Message must be at least 10 characters.';
    return '';
  }
  function check(id) {
    var input = document.getElementById(id);
    var msg = getError(id, input.value.trim());
    document.getElementById(id + 'Err').textContent = msg;
    input.classList.toggle('invalid', msg !== '');
    input.setAttribute('aria-invalid', msg !== '' ? 'true' : 'false');
    return msg === '';
  }
  fields.forEach(function (id) { document.getElementById(id).addEventListener('blur', function () { check(id); }); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    success.hidden = true;
    var firstBad = null;
    fields.forEach(function (id) { if (!check(id) && !firstBad) firstBad = id; });
    if (firstBad) { document.getElementById(firstBad).focus(); return; }
    success.textContent = 'Thank you, ' + document.getElementById('name').value.trim() + '! Your message has been validated and received.';
    success.hidden = false;
    form.reset();
  });
});
