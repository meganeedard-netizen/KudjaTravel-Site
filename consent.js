/* Mesure d'audience Google Analytics, activée uniquement après accord du visiteur (CNIL). */
(function () {
  var GA_ID = 'G-P5Q2YV0DE5';
  var KEY = 'kt_cookie_consent';
  var MAX_AGE = 1000 * 60 * 60 * 24 * 182; // choix redemandé au bout de 6 mois
  var en = (document.documentElement.lang || '').indexOf('en') === 0;
  var privacy = (location.pathname.indexOf('/en/') === 0 ? '../' : '') + 'politiques-de-confidentialites.html';

  var T = en ? {
    text: 'We use cookies to measure how many people visit the site, nothing else. Do you accept?',
    more: 'Learn more', ok: 'Accept', no: 'Decline', link: 'Cookies'
  } : {
    text: 'Nous utilisons des cookies uniquement pour mesurer la fréquentation du site. Vous acceptez ?',
    more: 'En savoir plus', ok: 'Accepter', no: 'Refuser', link: 'Cookies'
  };

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      if (v && Date.now() - v.t < MAX_AGE) return v.c;
    } catch (e) {}
    return null;
  }
  function save(c) {
    try { localStorage.setItem(KEY, JSON.stringify({ c: c, t: Date.now() })); } catch (e) {}
  }

  var loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function clearGA() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        document.cookie = name + '=; Max-Age=0; path=/; domain=.' + location.hostname.replace(/^www\./, '');
        document.cookie = name + '=; Max-Age=0; path=/';
      }
    });
  }

  function css() {
    if (document.getElementById('kt-cookie-css')) return;
    var st = document.createElement('style');
    st.id = 'kt-cookie-css';
    st.textContent =
      '#kt-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:10000;max-width:560px;margin:0 auto;' +
      'background:#0D0D0B;color:#F5F0E8;border:0.5px solid rgba(201,185,154,0.35);border-radius:6px;' +
      'padding:1.1rem 1.25rem;box-shadow:0 10px 30px rgba(0,0,0,.35);font-family:"DM Sans",sans-serif;font-size:.85rem;line-height:1.6}' +
      '#kt-cookie p{margin:0 0 .9rem}' +
      '#kt-cookie a{color:#D4AF6E}' +
      '#kt-cookie .kt-btns{display:flex;gap:.6rem}' +
      '#kt-cookie button{flex:1;cursor:pointer;font:inherit;font-weight:500;padding:.65rem 1rem;border-radius:4px;letter-spacing:.03em}' +
      '#kt-cookie .kt-ok{background:#B8965A;color:#0D0D0B;border:1px solid #B8965A}' +
      '#kt-cookie .kt-no{background:transparent;color:#F5F0E8;border:1px solid rgba(201,185,154,0.5)}' +
      '#kt-cookie button:hover{filter:brightness(1.1)}';
    document.head.appendChild(st);
  }

  function banner() {
    if (document.getElementById('kt-cookie')) return;
    css();
    var d = document.createElement('div');
    d.id = 'kt-cookie';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-label', 'Cookies');
    d.innerHTML = '<p>' + T.text + ' <a href="' + privacy + '">' + T.more + '</a></p>' +
      '<div class="kt-btns"><button type="button" class="kt-no">' + T.no + '</button>' +
      '<button type="button" class="kt-ok">' + T.ok + '</button></div>';
    d.querySelector('.kt-ok').onclick = function () { save('granted'); d.remove(); loadGA(); };
    d.querySelector('.kt-no').onclick = function () { save('denied'); d.remove(); clearGA(); };
    document.body.appendChild(d);
  }

  function footerLink() {
    var ul = document.querySelector('footer .footer-links');
    if (!ul || ul.querySelector('.kt-cookie-link')) return;
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#';
    a.className = 'kt-cookie-link';
    a.textContent = T.link;
    a.onclick = function (e) { e.preventDefault(); banner(); };
    li.appendChild(a);
    ul.appendChild(li);
  }

  function init() {
    var c = read();
    if (c === 'granted') loadGA();
    else if (c === null) banner();
    footerLink();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
