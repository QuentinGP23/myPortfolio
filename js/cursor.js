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

// const cursorHover = document.querySelector('.custom-cursor-hover');

// function moveCursor1(e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   cursorHover.style.transform = `translate(${x}px, ${y}px) translate(-120%, -120%)`;
// }

// document.addEventListener('mousemove', moveCursor1);

// document.addEventListener('mousedown', () => {
//   cursorHover.classList.add('active');
// });

// document.addEventListener('mouseup', () => {
//   cursorHover.classList.remove('active');
// });
