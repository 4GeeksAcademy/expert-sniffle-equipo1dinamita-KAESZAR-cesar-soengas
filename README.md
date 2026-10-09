# SENDA — Moda consciente

SENDA es un prototipo académico de tienda de ropa online. Incluye portada, catálogo, fichas de producto, carrito y checkout. Está construido con HTML, Tailwind CSS v4 mediante CDN y JavaScript vanilla; no necesita un proceso de compilación.

> **Prototipo:** el checkout simula la confirmación del pedido. No procesa pagos reales.

## Ejecutar localmente

Requisitos: Python 3, Flask y conexión a internet para cargar Tailwind y las imágenes alojadas en Unsplash.

Desde la raíz del proyecto:

```bash
python3 -m pip install flask
python3 server.py
```

Abre [http://localhost:3000](http://localhost:3000). Usa el servidor Flask en lugar de abrir `index.html` directamente, ya que las páginas cargan la navegación y el pie desde parciales.

## Secciones

- `index.html`: portada y productos destacados.
- `catalogo.html`: catálogo, filtros y ordenación.
- `producto.html`: detalle, selección de talla y cantidad, y añadir a la bolsa.
- `carrito.html`: consulta y edición de los artículos elegidos.
- `checkout.html`: datos de entrega y confirmación de compra de prueba. La compra vacía el carrito.
- `partials/`: header y footer compartidos.
- `image-fallback.js`: reemplaza imágenes de producto que fallen por un aviso «SIN STOCK»; la imagen de portada tiene un fondo alternativo.
- `public/image-performance/pagespeed-result.png.png`: captura del resultado de rendimiento.

El carrito se guarda en `localStorage` con la clave `senda-cart`.

## Tecnologías y pautas

- HTML semántico y accesible.
- Tailwind CSS v4 por CDN, más estilos CSS puntuales.
- JavaScript vanilla.
- Servidor Flask existente para desarrollo local.

Consulta `AGENTS.md` antes de contribuir. No se usan React, otros frameworks de frontend ni herramientas de build.

## Contribuir desde un fork

El repositorio original configurado para este proyecto es [`4GeeksAcademy/expert-sniffle-equipo1dinamita`](https://github.com/4GeeksAcademy/expert-sniffle-equipo1dinamita). En el clon del fork, `origin` debe apuntar a tu fork y `upstream` al repositorio original.

```bash
git remote -v
git fetch upstream
git switch main
git pull --ff-only upstream main
git switch -c feature/nombre-del-cambio
```

Implementa y prueba el cambio localmente, luego publícalo en tu fork y abre un Pull Request hacia `main` del repositorio original:

```bash
git add <archivos>
git commit -m "Describe el cambio"
git push -u origin feature/nombre-del-cambio
```

No subas directamente a `upstream/main`; integra el trabajo mediante Pull Request. Una vez fusionado, el equipo puede actualizar su copia con `git pull --ff-only upstream main`.
