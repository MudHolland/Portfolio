// Wrap the code in an immediately-invoked function expression (IIFE) to avoid polluting the global scope
(function () {
    // Get the modal, modal image, and caption elements
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
  
    // Function to handle the click event for images
    function openModal(img) {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
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
      modal.style.display = "none";
    }
  
    // Get the elements that close the modal and listen for clicks
    const span = document.getElementsByClassName("close")[0];
    const screen = document.getElementsByClassName("modal")[0];
  
    span.onclick = closeModal;
    screen.onclick = closeModal;
  
    // Handle accordion functionality
    function toggleAccordion(button) {
      const accordionContent = button.nextElementSibling;
      button.classList.toggle('accordion__button--active');
      accordionContent.style.maxHeight = button.classList.contains('accordion__button--active') ? accordionContent.scrollHeight + 'px' : 0;
    }
  
    // Get all the accordion buttons on the page and attach click event listeners
    const accordionButtons = document.querySelectorAll('.accordion__button');
    accordionButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        toggleAccordion(this);
      });
    });
  
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
  