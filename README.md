# La filosofía del bostezo

Sitio de **filosofiadelbostezo.com** — investigación sobre el bostezo como posible
pulso de calibración, y sobre el mantenimiento dinámico de la forma en lo vivo.

Autor: Ian de Pablo Ruf · Andorra
Substack: https://lafilosofiadelbostezo.substack.com

---

## Estructura

```
index.html                          portada
investigacion/index.html            los siete puntos, versión corta
investigacion/desarrollo/index.html los siete puntos, versión completa
autor/index.html                    quién escribe
conceptualizacion-clinica/index.html  el trigémino en el control postural
assets/base.css                     cabecera, pie e identidad — compartidos
assets/site.js                      cabecera y pie inyectados en cada página
assets/img/                         imágenes
robots.txt · sitemap.xml
```

Sitio estático: HTML, CSS y un archivo JS. Sin dependencias, sin compilación.
Se publica tal cual.

## Cómo editar

**El menú, la cabecera o el pie** → `assets/site.js`. Un solo sitio; el cambio
aparece en las cinco páginas.

**Los colores y la tipografía** → `assets/base.css`, bloque `:root`.
Solo colores del manual de identidad: Azul Noche `#1E2A44`, Marfil `#F6F1E8`,
Verde Profundo `#3F5A4B`, Pizarra `#2F3A3D`, Dorado `#C8A96B`.

**El contenido de una página** → su propio `index.html`. Cada página lleva sus
estilos propios en un `<style>` y carga `base.css` después, que gana en caso de
conflicto.

**Un ensayo nuevo** → duplicar una tarjeta `.ensayo` en `index.html`, dentro de
`#ensayos`, y ponerla la primera.

## Cómo se publica

Dos ramas, y la diferencia importa:

| Rama | Dónde sale | Para qué |
|---|---|---|
| `main` | `filosofiadelbostezo.com` | lo público, lo que lee cualquiera |
| `borrador` | `borrador.filosofiadelbostezo.pages.dev` | probar antes de publicar |

Cloudflare Pages publica sola: al subir un cambio a `borrador`, la URL de borrador
se actualiza en unos veinte segundos. Nada de eso toca el dominio público. Cuando
un cambio está aprobado, se pasa de `borrador` a `main` y entonces sí sale a la web.

Cualquier página servida desde un dominio `.pages.dev` muestra una cápsula dorada
abajo a la izquierda con la palabra **BORRADOR** y el nombre de la rama. Si esa
cápsula no está, estás mirando la web pública.

## Reglas de contenido

- Cada afirmación lleva su etiqueta: hecho, hipótesis, observación clínica o
  especulación. Las cápsulas de color están en `.chip` (`base.css`).
- Cuando existe una explicación rival mejor apoyada, se presenta antes que la propia.
- No se publica material de terceros sin licencia comprobada.
- No se publican nombres de ficheros internos del proyecto.

## Pendiente

- `/aviso-legal` y `/privacidad` están enlazados desde el pie de `/autor` y todavía
  no existen.
- `lafilosofiadelbostezo.com` sigue aparcada; falta apuntarla al sitio.
