// Wrap the code in an immediately-invoked function expression (IIFE) to avoid polluting the global scope
(function () {
  // Function to handle the click event for images
  function openModal(img) {
    if (modal) {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }
  }

  // Get all the image elements on the page and attach click event listeners
  const images = document.querySelectorAll('img');
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      openModal(this);
    });
  });

  // Function to close the modal
  function closeModal() {
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Get the elements that close the modal and listen for clicks
  const modal = document.getElementById('myModal');
  const modalImg = modal ? document.getElementById("img01") : null;
  const captionText = modal ? document.getElementById("caption") : null;

  const span = document.getElementsByClassName("close")[0];
  const screen = document.getElementsByClassName("modal")[0];

  if (span) {
    span.onclick = closeModal;
  }

  if (screen) {
    screen.onclick = closeModal;
  }

  // Function to handle image aspect ratio
  function handleImageAspectRatio(figureElement) {
    const imgElement = figureElement.querySelector('img');
    const image = new Image();

    // Get the natural dimensions of the image without triggering a load event
    image.onload = function () {
      if (image.height > image.width) {
        figureElement.classList.add('half-width');
      } else {
        figureElement.classList.remove('half-width');
      }
    };

    // Set the source after the onload event is attached
    image.src = imgElement.src;
  }

  // Get all figure elements on the page and handle image aspect ratio for each one
  const figureElements = document.querySelectorAll('figure');
  figureElements.forEach(function (figureElement) {
    handleImageAspectRatio(figureElement);
  });
})();
