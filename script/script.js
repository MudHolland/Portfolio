(function () {
  function openModal(img) {
    if (modal) {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }
  }
  
  const images = document.querySelectorAll('img:not(.no-modal)');
  images.forEach(function (img) {
    img.addEventListener('click', function () {
      openModal(this);
    });
  });

  function closeModal() {
    if (modal) {
      modal.style.display = "none";
    }
  }

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

  function loadImage(img) {
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.addEventListener('load', resolve);
      }
    });
  }

  document.querySelectorAll(".quote").forEach((quote) => {
    const bigText = quote.getAttribute("big-text");
    if (!bigText) {
      quote.setAttribute("big-text", "“"); // Fallback to quotation marks
    }
  });

  async function handleImageAspectRatio(figureElement) {
    const imgElement = figureElement.querySelector('img');
    await loadImage(imgElement);

    const image = new Image();
    image.src = imgElement.src;

    if (image.height > image.width) {
      figureElement.classList.add('half-width');
    }
  }

  function addExternalLinkClass() {
    // Get all anchor elements on the page
    const links = document.querySelectorAll('a');

    // Iterate over each link
    links.forEach(link => {
        // Check if the link's hostname is different from the current hostname
        if (link.hostname && link.hostname !== window.location.hostname) {
            // Add the 'external' class
            link.classList.add('external');
        }
    });
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addExternalLinkClass);

  document.addEventListener("DOMContentLoaded", function () {
    const figureElements = document.querySelectorAll('figure');
    figureElements.forEach(function (figureElement) {
      handleImageAspectRatio(figureElement);
    });
  });
})();
