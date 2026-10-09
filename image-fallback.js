// Fallback local para mostrar un aviso cuando una imagen externa no carga.
const fallbackSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
    <rect width="400" height="500" fill="#ebe8e1" />
    <text x="200" y="245" text-anchor="middle" fill="#52604a" font-family="Arial, sans-serif" font-size="24" letter-spacing="3">SIN STOCK</text>
    <text x="200" y="278" text-anchor="middle" fill="#73746d" font-family="Arial, sans-serif" font-size="14">Imagen no disponible</text>
  </svg>`;
const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackSvg)}`;

document.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;

  image.dataset.fallbackApplied = 'true';
  image.alt = 'Imagen sin stock';
  image.src = fallbackImage;
}, true);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-image-background]').forEach(element => {
    const imageTest = new Image();
    imageTest.addEventListener('error', () => element.classList.add('image-background-unavailable'), { once: true });
    imageTest.src = element.dataset.imageBackground;
  });
});