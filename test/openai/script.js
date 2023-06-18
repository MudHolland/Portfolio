const cards = document.querySelectorAll('.card');

function rotateCard(e) {
  const card = e.currentTarget;
  const halfHeight = card.offsetHeight / 2;
  const halfWidth = card.offsetWidth / 2;
  const mouseX = e.pageX - card.offsetLeft - halfWidth;
  const mouseY = e.pageY - card.offsetTop - halfHeight;
  const rotateX = mouseY / halfHeight;
  const rotateY = mouseX / halfWidth;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

cards.forEach(card => {
  card.addEventListener('mouseenter', rotateCard);
  card.addEventListener('mouseleave', rotateCard);
});
// const cards = document.querySelectorAll('.card');

// function rotateCard(e) {
//   const card = e.currentTarget;
//   const halfHeight = card.offsetHeight / 2;
//   const halfWidth = card.offsetWidth / 2;
//   const mouseX = e.pageX - card.offsetLeft - halfWidth;
//   const mouseY = e.pageY - card.offsetTop - halfHeight;
//   const rotateX = mouseY / halfHeight;
//   const rotateY = mouseX / halfWidth;
//   card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// }

// cards.forEach(card => card.addEventListener('mousemove', rotateCard));
