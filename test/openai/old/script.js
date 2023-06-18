// Haal alle planeten-kaarten op uit de DOM
const planetCards = document.querySelectorAll('.planet-card');

// Voeg een event listener toe aan de sorteer-knop
const sorteerKnop = document.querySelector('#sort-button');
sorteerKnop.addEventListener('click', function () => {
  // Sorteer de planeten-kaarten op naam
  planetCards.sort((a, b) => { 
    const nameA = a.querySelector('h2').textContent;
    const nameB = b.querySelector('h2').textContent;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // Voeg de gesorteerde kaarten terug toe aan de DOM
  planetCards.forEach((planetCard) => {
    const parent = planetCard.parentElement;
    parent.removeChild(planetCard);
    parent.appendChild(planetCard);
  });
});

// Voeg een event listener toe aan de filter-knop
const filterButton = document.querySelector('#filter-button');
filterButton.addEventListener('click', () => {
  // Filter de planeten-kaarten op grootte
  planetCards.filter((planetCard) => {
    const size = planetCard.querySelector('p').textContent;
    return size.includes('grootste') || size.includes('kleinste');
  });

  // Voeg de gefilterde kaarten terug toe aan de DOM
  planetCards.forEach((planetCard) => {
    const parent = planetCard.parentElement;
    parent.removeChild(planetCard);
    parent.appendChild(planetCard);
  });
});