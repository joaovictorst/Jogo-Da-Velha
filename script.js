const cellElements = document.querySelectorAll("[data-casa]");

let isCircleTurn;

const handleClick = (e) => {
  const cell = e.target;
  const classToAdd = isCircleTurn ? 'circulo' : 'x';

  cell.classList.add(classToAdd);
};

for (const cell of cellElements) {
  cell.addEventListener("click" , handleClick, { once: true});
}
