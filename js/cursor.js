const cursor = document.querySelector('.custom-cursor');

function moveCursor(e) {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate(${x}px, ${y}px) translate(-120%, -120%)`;
}

document.addEventListener('mousemove', moveCursor);

document.addEventListener('mousedown', () => {
  cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('active');
});
