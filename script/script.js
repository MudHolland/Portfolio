window.onload = function(){
	// Get the modal, get the image and insert it inside the modal - use its "alt" text as a caption
	var modal = document.getElementById('myModal');
	var images = document.querySelectorAll('img');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	images.forEach(function(img) {
	  img.addEventListener('click', function() {
		modal.style.display = "block";
		var newSrc = this.src;
		modalImg.src = newSrc;
		captionText.innerHTML = this.alt;
	  });
	});
  
	// Get the elements that close the modal and listen for clicks
	var span = document.getElementsByClassName("close")[0];
	var screen = document.getElementsByClassName("modal")[0];
  
	span.onclick = function() {
	  modal.style.display = "none";
	};
  
	screen.onclick = function() {
	  modal.style.display = "none";
	};
  };
  
  document.querySelectorAll('.accordion__button').forEach(function(button) {
	button.addEventListener('click', function() {
	  var accordionContent = button.nextElementSibling;
  
	  button.classList.toggle('accordion__button--active');
  
	  if (button.classList.contains('accordion__button--active')) {
		accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
	  } else {
		accordionContent.style.maxHeight = 0;
	  }
	});
  });