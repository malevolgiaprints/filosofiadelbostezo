/* ============================================================
   La filosofía del bostezo · cabecera y pie compartidos
   Fuente única. Cada página solo declara los contenedores:
     <div data-cabecera></div>  ...  <div data-pie></div>
   El HTML dentro de esos contenedores es el respaldo sin JS.
   ============================================================ */
(function () {
  var ISOTIPO = "<g id=\"isotipo-min\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\">\n      <path opacity=\".55\" d=\"M100.0 64.0C103.1 64.0 106.3 64.4 109.3 65.2C112.3 66.0 115.3 67.3 118.0 68.8C120.7 70.4 123.3 72.3 125.5 74.5C127.7 76.7 129.6 79.3 131.2 82.0C132.7 84.7 134.0 87.7 134.8 90.7C135.6 93.7 136.0 96.9 136.0 100.0C136.0 103.1 135.6 106.3 134.8 109.3C134.0 112.3 132.7 115.3 131.2 118.0C129.6 120.7 127.7 123.3 125.5 125.5C123.3 127.7 120.7 129.6 118.0 131.2C115.3 132.7 112.3 134.0 109.3 134.8C106.3 135.6 103.1 136.0 100.0 136.0C96.9 136.0 93.7 135.6 90.7 134.8C87.7 134.0 84.7 132.7 82.0 131.2C79.3 129.6 76.7 127.7 74.5 125.5C72.3 123.3 70.4 120.7 68.8 118.0C67.3 115.3 66.0 112.3 65.2 109.3C64.4 106.3 64.0 103.1 64.0 100.0C64.0 96.9 64.4 93.7 65.2 90.7C66.0 87.7 67.3 84.7 68.8 82.0C70.4 79.3 72.3 76.7 74.5 74.5C76.7 72.3 79.3 70.4 82.0 68.8C84.7 67.3 87.7 66.0 90.7 65.2C93.7 64.4 96.9 64.0 100.0 64.0Z\"/>\n      <path opacity=\".78\" d=\"M100.0 42.0C104.8 42.0 109.8 44.8 114.3 46.6C118.9 48.4 123.1 50.4 127.3 52.8C131.4 55.2 135.3 57.9 139.1 60.9C142.9 63.9 147.8 66.9 150.2 71.0C152.6 75.1 152.7 80.9 153.4 85.7C154.1 90.5 154.5 95.2 154.5 100.0C154.5 104.8 154.1 109.5 153.4 114.3C152.7 119.1 152.6 124.9 150.2 129.0C147.8 133.1 142.9 136.1 139.1 139.1C135.3 142.1 131.4 144.8 127.3 147.2C123.1 149.6 118.9 151.6 114.3 153.4C109.8 155.2 104.8 158.0 100.0 158.0C95.2 158.0 90.2 155.2 85.7 153.4C81.1 151.6 76.9 149.6 72.7 147.2C68.6 144.8 64.7 142.1 60.9 139.1C57.1 136.1 52.2 133.1 49.8 129.0C47.4 124.9 47.3 119.1 46.6 114.3C45.9 109.5 45.5 104.8 45.5 100.0C45.5 95.2 45.9 90.5 46.6 85.7C47.3 80.9 47.4 75.1 49.8 71.0C52.2 66.9 57.1 63.9 60.9 60.9C64.7 57.9 68.6 55.2 72.7 52.8C76.9 50.4 81.1 48.4 85.7 46.6C90.2 44.8 95.2 42.0 100.0 42.0Z\"/>\n      <path opacity=\"1\" d=\"M100.0 20.0C106.3 20.0 112.9 26.7 118.8 29.9C124.6 33.1 129.8 35.9 135.2 39.1C140.6 42.2 145.6 45.2 151.3 48.7C157.0 52.2 166.2 54.6 169.3 60.0C172.4 65.4 169.9 74.6 170.1 81.2C170.3 87.9 170.4 93.7 170.4 100.0C170.4 106.3 170.3 112.1 170.1 118.8C169.9 125.4 172.4 134.6 169.3 140.0C166.2 145.4 157.0 147.8 151.3 151.3C145.6 154.8 140.6 157.8 135.2 160.9C129.8 164.1 124.6 166.9 118.8 170.1C112.9 173.3 106.3 180.0 100.0 180.0C93.7 180.0 87.1 173.3 81.2 170.1C75.4 166.9 70.2 164.1 64.8 160.9C59.4 157.8 54.4 154.8 48.7 151.3C43.0 147.8 33.8 145.4 30.7 140.0C27.6 134.6 30.1 125.4 29.9 118.8C29.7 112.1 29.6 106.3 29.6 100.0C29.6 93.7 29.7 87.9 29.9 81.2C30.1 74.6 27.6 65.4 30.7 60.0C33.8 54.6 43.0 52.2 48.7 48.7C54.4 45.2 59.4 42.2 64.8 39.1C70.2 35.9 75.4 33.1 81.2 29.9C87.1 26.7 93.7 20.0 100.0 20.0Z\"/>\n      <circle fill=\"#C8A96B\" stroke=\"none\" cx=\"100\" cy=\"100\" r=\"21\"/>\n    </g>";
  var CABECERA = "<header class=\"cabecera\"><div class=\"cabecera__int\"><a class=\"marca\" href=\"/\" aria-label=\"La filosofía del bostezo — inicio\"><svg class=\"iso\" viewBox=\"0 0 200 200\" aria-hidden=\"true\"><use href=\"#isotipo-min\"/></svg><span class=\"marca-txt\">La filosofía del<span>bostezo</span></span></a><nav aria-label=\"Principal\"><ul class=\"menu\"><li><a href=\"/#escalera\" data-ancla>Escalera de complejidad</a></li><li><a href=\"/#practica\" data-ancla>La práctica</a></li><li><a href=\"/#ensayos\" data-ancla>Ensayos</a></li><li class=\"sep\" aria-hidden=\"true\"></li><li><a href=\"/investigacion\">La investigación</a></li><li><a href=\"/autor\">Quién escribe</a></li><li><a href=\"/conceptualizacion-clinica\">Conceptualización clínica</a></li></ul></nav><a class=\"cta\" href=\"/#suscribir\"><span class=\"largo\">Recibir los&nbsp;ensayos</span><span class=\"corto\">Suscribirse</span></a></div></header>";
  var PIE = "<footer class=\"pie\"><div class=\"pie__int\"><span>\u00a9 2026 Ian de Pablo Ruf \u00b7 Andorra</span><span class=\"pie__enlaces\"><a href=\"/investigacion\">La investigaci\u00f3n</a><a href=\"/autor\">Qui\u00e9n escribe</a><a href=\"https://lafilosofiadelbostezo.substack.com\" rel=\"me\" target=\"_blank\">Substack</a></span><span class=\"pie__paleta\" title=\"Paleta oficial\"><i style=\"background:#F6F1E8\"></i><i style=\"background:#3F5A4B\"></i><i style=\"background:#1E2A44\"></i><i style=\"background:#2F3A3D\"></i><i style=\"background:#C8A96B\"></i></span></div></footer>";

  function pinta(sel, html) {
    var n = document.querySelector(sel);
    if (n) n.outerHTML = html;
  }

  // el símbolo del isotipo, una sola vez por documento
  if (!document.getElementById('isotipo-min')) {
    var d = document.createElement('div');
    d.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    d.setAttribute('aria-hidden', 'true');
    d.innerHTML = '<svg width="0" height="0"><defs>' + ISOTIPO + '</defs></svg>';
    document.body.insertBefore(d, document.body.firstChild);
  }

  pinta('[data-cabecera]', CABECERA);
  pinta('[data-pie]', PIE);

  // marca la pestaña actual
  var ruta = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.cabecera .menu a:not([data-ancla])').forEach(function (a) {
    var href = a.getAttribute('href').split('#')[0].replace(/\/$/, '') || '/';
    if (href !== '/' && ruta.indexOf(href) === 0) a.setAttribute('aria-current', 'page');
  });

  // sombra al desplazar
  var cab = document.querySelector('.cabecera');
  if (cab) {
    var fija = function () { cab.classList.toggle('fija', window.scrollY > 24); };
    window.addEventListener('scroll', fija, { passive: true });
    fija();
  }

  // aviso de borrador — solo fuera del dominio público
  try {
    var h = location.hostname;
    if (/\.pages\.dev$/.test(h) || h === 'localhost' || h === '127.0.0.1') {
      var rama = /\.pages\.dev$/.test(h) ? h.split('.')[0] : 'local';
      if (rama === 'filosofiadelbostezo') rama = 'producción';
      var b = document.createElement('div');
      b.textContent = 'BORRADOR · ' + rama;
      b.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:9999;' +
        'font:600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.09em;' +
        'padding:8px 11px;border-radius:999px;background:#C8A96B;color:#1E2A44;' +
        'box-shadow:0 2px 10px rgba(0,0,0,.35);pointer-events:none;user-select:none';
      document.body.appendChild(b);
    }
  } catch (e) { /* el aviso nunca debe romper la página */ }
})();
