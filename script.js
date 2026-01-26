document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.parents-group');

  let maxWidth = 0;

  // calcular el ancho mayor
  boxes.forEach(box => {
    box.style.minWidth = 'auto';
    maxWidth = Math.max(maxWidth, box.offsetWidth);
  });

  // aplicar a todos
  boxes.forEach(box => {
    box.style.minWidth = `${maxWidth}px`;
  });
});