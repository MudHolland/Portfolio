
document.addEventListener("DOMContentLoaded", function() {
    var active = window.location.active;
    if (active) {
        var target = document.querySelector(active);
        if (active) {
            active.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
});

$(document).ready(function() {
    // Add event listener to toggleDecoratief button
    $('#toggleDecoratiefButton').click(function() {
        var toggleButton = $(this).find('img');
        var allAfbeeldingsbalks = $('.functie p:contains("Decoratief")').closest('.afbeeldingsbalk');
        var allPaginabalks = $('.functie p:contains("Decoratief")').closest('.paginabalk');
        
        // Toggle image source
        if (toggleButton.attr('src').endsWith("./src/toggle-on.svg")) {
            toggleButton.attr('src', './src/toggle-off.svg');
            // Hide all afbeeldingsbalks and paginabalks with Decoratief
            allAfbeeldingsbalks.hide();
            allPaginabalks.hide();
        } else {
            toggleButton.attr('src', './src/toggle-on.svg');
            // Show all afbeeldingsbalks and paginabalks with Decoratief
            allAfbeeldingsbalks.show();
            allPaginabalks.show();
        }
    });
});
    // function openPDF() {
    //     var paginaNumber = document.getElementById('paginaNumber').textContent.split(" ")[1]; // Extract pagina number
    //     var newURL = './Dedicon-Jaarverslag-2023-pdf_DEF/Dedicon-Jaarverslag-2023-pdf_DEF.pdf#page=' + paginaNumber;
    //     window.open(newURL, '_blank', 'width=760,height=960');
    // }

  

    function openPDF() {
        var activeElement = document.querySelector('.afbeeldingsbalk.active');
        var paginaNumber = null;
    
        // Get the previous sibling of the active afbeeldingsbalk
        var previousSibling = activeElement.previousElementSibling;
    
        if (previousSibling) {
            // Extract pagina number from the previous sibling
            paginaNumber = previousSibling.textContent.split(" ")[1];
        } else {
            // Default to 1 if no previous sibling found
            paginaNumber = 1;
        }
    
        var newURL = './Dedicon-Jaarverslag-2023-pdf_DEF/Dedicon-Jaarverslag-2023-pdf_DEF.pdf#page=' + paginaNumber;
        window.open(newURL, '_blank', 'width=760,height=960');
    }
    
    

$(document).ready(function() {
    // Add event listener to toggleDecoratief button
    $('#toggleGevuldButton').click(function() {
        var toggleButton = $(this).find('img');
        var allBalksWithCheck = $('.afbeeldingsbalk, .paginabalk').filter(function() {
            return $(this).find('.fa-check-circle-o').length > 0;
        });
        
        // Toggle image source
        if (toggleButton.attr('src').endsWith("./src/toggle-on.svg")) {
            toggleButton.attr('src', './src/toggle-off.svg');
            // Hide balks with fa-check-circle-o
            allBalksWithCheck.hide();
        } else {
            toggleButton.attr('src', './src/toggle-on.svg');
            // Show balks with fa-check-circle-o
            allBalksWithCheck.show();
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.getElementById('kbb');
    const charCount = document.getElementById('charCount');

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        
        if (currentLength > 79) {
            charCount.style.display = 'block';
            charCount.textContent = `${currentLength}/100 karakters`;
        } else {
            charCount.style.display = 'none';
        }

        if (currentLength > 100) {
            charCount.style.color = 'var(--orange)';
            charCount.style.fontWeight = '700';
            textarea.style.borderColor = 'var(--orange)';
            textarea.style.borderWidth = 'var(--size-xs)';
        } else {
            charCount.style.color = 'var(--darkgrey)';
            charCount.style.fontWeight = '400';
            textarea.style.borderColor = 'var(--grey)';
            textarea.style.borderWidth = 'var(--size-xxs)';
        }
    });
});


function toggleMenu(clickedElement) {
    var menu = document.querySelector('.menu-options');
    var chevronWeergave = document.getElementById('chevron-weergave');

    menu.classList.toggle('show');
    chevronWeergave.classList.toggle('rotate');
}

// Function to update the h1 element with the image name
function updateImageName() {
    // Get the current image element
    var currentImage = document.getElementById('currentImage');

    // Get the source of the current image
    var currentImageSrc = currentImage.src;

    // Extract the filename from the image source
    var imageName = currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1);

    // Update the h1 element with the image name
    var h1Element = document.querySelector('.afbeeldingsoverzicht .informatievelden h1');
    h1Element.textContent = imageName;
}

// Call the updateImageName function on page load
window.addEventListener('load', updateImageName);

// Function to open the image in a new window and update the h1 element
function openImage() {
    // Call the function to update the h1 element with the image name
    updateImageName();

    // Get the current image source
    var currentImageSrc = document.getElementById('currentImage').src;

    // Call the function to update the bijschrift based on the current image filename
    openBijschrift(currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1));
    openBijschrift(currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1));

    // Open the image in a new window
    window.open(currentImageSrc, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes');
}

$(document).ready(function() {
    $('.bbBewerkenButton').click(function() {
        $('.kolom2').toggle(); // Toggle the display property of the alters div
    });
});

// $(document).ready(function() {
//     $('#functie').change(function() {
//         // Get the selected value of the select element
//         var selectedValue = $(this).val();

//         // Show or hide classes based on the selected value
//         if (selectedValue === 'informatief') {
//             // Show classes for 'informatief' and hide 'decoratief'
//             $('.kbb-info, .lbb-info, .informatief-info, .kolom2, .bbBewerkenButton').show();
//             $('.decoratief-info').hide();
//         } else if (selectedValue === 'decoratief') {
//             // Show class 'decoratief' and hide others
//             $('.decoratief-info').show();
//             $('.kbb-info, .lbb-info, .informatief-info, .kolom2, .bbBewerkenButton').hide();
//         } else {
//             // For other values, hide all related classes
//             $('.kbb-info, .lbb-info, .informatief-info, .decoratief-info, .kolom2, .bbBewerkenButton').hide();
//         }
//     });

//     // Trigger the change event to initialize the state based on the initial value
//     $('#functie').trigger('change');
// });

$(document).ready(function() {
    $('#functie').change(function() {
        // Get the selected value of the select element
        var selectedValue = $(this).val();

        // Show or hide classes based on the selected value
        if (selectedValue === 'informatief') {
            // Show classes for 'informatief' and hide 'decoratief'
            $('.kbb-info, .lbb-info, .informatief-info, .kolom2, .bbBewerkenButton').show();
            $('.decoratief-info').hide();

            // Update the text and remove the <i> element for 'informatief'
            $('.afbeeldingsbalk.active .functie p').text('Informatief');
            // Update the text and add the <i> element for 'decoratief' if it's not already there
            var functieContainer = $('.afbeeldingsbalk.active .functie');
            if (!functieContainer.find('i.fa-circle-o').length) {
                functieContainer.append('<i class="fa fa-circle-o justify-right" aria-hidden="true"></i>');
            }
            
        } else if (selectedValue === 'decoratief') {
            // Show class 'decoratief' and hide others
            $('.decoratief-info').show();
            $('.kbb-info, .lbb-info, .informatief-info, .kolom2, .bbBewerkenButton').hide();

            // Update the text and add the <i> element for 'decoratief'
            $('.afbeeldingsbalk.active .functie p').text('Decoratief');
            $('.afbeeldingsbalk.active .functie i').remove();
        } else {
            // For other values, hide all related classes
            $('.kbb-info, .lbb-info, .informatief-info, .decoratief-info, .kolom2, .bbBewerkenButton').hide();
        }
    });

    // Trigger the change event to initialize the state based on the initial value
    $('#functie').trigger('change');
});




function replaceImage(index) {
    // Remove 'active' class from all elements with class 'afbeeldingsbalk'
    document.querySelectorAll('.afbeeldingsbalk').forEach(function(element) {
        element.classList.remove('active');
    });

    // Find the corresponding image element in .afbeeldingsoverzicht
    var imageOverview = document.getElementById("currentImage");

    // Find the corresponding thumbnail source
    var thumbSrc = document.querySelector(`.afbeeldingsbalk[data-index="${index}"] .afbeelding-thumb img`).src;

    // Update the image source in .afbeeldingsoverzicht
    imageOverview.src = thumbSrc;

    // Call the function to update the bijschrift based on the new image filename
    openBijschrift(thumbSrc.substring(thumbSrc.lastIndexOf('/') + 1));

    // Add 'active' class to the clicked element
    document.querySelector(`.afbeeldingsbalk[data-index="${index}"]`).classList.add('active');
    // Get the current image element
    var currentImage = document.getElementById('currentImage');

    // Get the source of the current image
    var currentImageSrc = currentImage.src;

    // Extract the filename from the image source
    var imageName = currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1);

    // Update the h1 element with the image name
    var h1Element = document.querySelector('.afbeeldingsoverzicht .informatievelden h1');
    h1Element.textContent = imageName;
}

// Attach click event listeners to all .afbeeldingsbalk elements
var afbeeldingsbalks = document.querySelectorAll('.afbeeldingsbalk');
afbeeldingsbalks.forEach(function (balk, index) {
    balk.addEventListener('click', function () {
        replaceImage(index);
    });
});

function openBijschrift(imageName) {
    // Fetch JSON data
    fetch('Dedicon-Jaarverslag-2023-pdf_DEF.json')
        .then(response => response.json())
        .then(data => {
            // Find the corresponding row in JSON data
            const imageData = data.find(item => item.bestandsnaam === imageName);

            // If corresponding data is found, update the bijschrift
            if (imageData) {
                const bijschriftElement = document.getElementById('bijschrift');
                if (imageData.bijschrift) {
                    bijschriftElement.innerHTML = `<i>"${imageData.bijschrift}"</i>`;
                    // Show bijschrift-row if bijschrift is not empty
                    document.getElementById('bijschrift-row').style.display = 'flex';
                } else {
                    // If bijschrift is empty, hide bijschrift-row
                    bijschriftElement.innerHTML = `<i>No bijschrift found for ${imageName}</i>`;
                    document.getElementById('bijschrift-row').style.display = 'none';
                }
            } else {
                // If no corresponding data is found, display a message
                document.getElementById('bijschrift-row').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

// Get the textarea element
var textarea = document.getElementById("suggestieTextarea");

// Initialize index
var index = 0;

// Typing function
function typeText() {
    // Reset index to 0
    index = 0;

    // Get the active afbeeldingsbalk element
    var activeAfbeeldingsbalk = document.querySelector('.afbeeldingsbalk.active');

    // Check if the activeAfbeeldingsbalk exists and has a data-index attribute
    if (activeAfbeeldingsbalk && activeAfbeeldingsbalk.hasAttribute('data-index')) {
        // Get the value of the data-index attribute
        var dataIndex = activeAfbeeldingsbalk.getAttribute('data-index');

        // Define the text to be typed based on the data-index value
        var textToType = (dataIndex === '3') ? "Een foto van een vrouw die een koptelefoon draagt en op een bank zit. Ze lacht en lijkt te genieten van haar tijd. De kamer heeft een houten interieur en een raam op de achtergrond." : "Een foto van een vrouw en een klein meisje die aan een tafel zitten en aan een kleurboek werken. De vrouw draagt een grijze trui en helpt het kleine meisje met haar werk. De tafel is gevuld met kleurrijke papieren en boeken, waardoor een leuke en boeiende sfeer voor de kinderen ontstaat.";

        // Inner function for typing
        function typeCharacter() {
            textarea.value += textToType.charAt(index);
            index++;

            // Check if all text has been typed
            if (index < textToType.length) {
                setTimeout(typeCharacter, 25);
            }
        }

        // Start typing
        typeCharacter();
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
            const textarea = document.getElementById('kbb');
            const charCount = document.getElementById('charCount');
            const problemLength = document.querySelector('.problemLength');

            textarea.addEventListener('input', () => {
                const currentLength = textarea.value.length;
                
                if (currentLength > 79) {
                    charCount.style.display = 'block';
                    charCount.textContent = `${currentLength}/100 karakters`;
                } else {
                    charCount.style.display = 'none';
                }

                if (currentLength > 100) {
                    charCount.style.color = 'var(--orange)';
                    charCount.style.fontWeight = '700';
                    textarea.style.borderColor = 'var(--orange)';
                    textarea.style.borderWidth = 'var(--size-xs)';
                    problemLength.style.display = 'block';
                    charCount.style.color = 'var(--orange)';
                    charCount.style.fontWeight = '700';
                } else {
                    charCount.style.color = 'var(--darkgrey)';
                    charCount.style.fontWeight = '400';
                    textarea.style.borderColor = 'var(--grey)';
                    textarea.style.borderWidth = 'var(--size-xxs)';
                    problemLength.style.display = 'none';
                    charCount.style.color = 'var(--darkgrey)';
                    charCount.style.fontWeight = '400';
                }
            });
        });

        $(document).ready(function() {
            $('.bbOpslaan').click(function() {
                // Store the initially active .afbeeldingsbalk
                var initiallyActive = $('.afbeeldingsbalk.active');
        
                // Find the <i> element with class fa-circle-o inside the initially active .afbeeldingsbalk and change it to fa-check-circle-o
                initiallyActive.find('i.fa-circle-o').removeClass('fa-circle-o').addClass('fa-check-circle-o');
        
                // Remove 'active' class from all '.afbeeldingsbalk'
                $('.afbeeldingsbalk').removeClass('active');
        
                // Add 'active' class to the '.afbeeldingsbalk' containing 'image-010'
                var activeAfbeeldingsbalk = $('.afbeeldingsbalk img[src$="image-010.jpg"]').closest('.afbeeldingsbalk');
                activeAfbeeldingsbalk.addClass('active');
        
                // Trigger click event on the active .afbeeldingsbalk
                activeAfbeeldingsbalk.click();
        
                // Check if activeAfbeeldingsbalk contains "image-010.jpg"
                if (activeAfbeeldingsbalk.find('img[src$="image-010.jpg"]').length > 0) {
                    // Clear text in textareas with ids "kbb" and "lbb"
                    $('#kbb').val('');
                    $('#lbb').val('');
        
                    // Reset character count
                    const charCount = document.getElementById('charCount');
                    charCount.style.display = 'none';
                    charCount.textContent = '0/100 karakters';
                    charCount.style.color = 'var(--darkgrey)';
                    charCount.style.fontWeight = '400';
        
                    // Reset border color of textarea
                    const textarea = document.getElementById('kbb');
                    textarea.style.borderColor = 'var(--grey)';
                    textarea.style.borderWidth = 'var(--size-xxs)';
        
                    // Hide problem-length message
                    const problemLength = document.querySelector('.problemLength');
                    problemLength.style.display = 'none';
                }
        
                // Close .problemLengthPanel
                const problemLengthPanel = document.querySelector('.problemLengthPanel');
                if (problemLengthPanel) {
                    problemLengthPanel.style.display = 'none';
                }
        
                // Disable the save button
                $(this).attr('disabled', 'disabled');
            });
        });


$(document).ready(function() {
    $('.bbOpslaan').click(function() {
        // Store the voortgangsbalk element
        var voortgangsbalk = $('.voortgangsbalk');

        // Toggle classes based on current state
        if (voortgangsbalk.hasClass('achtendertig')) {
            // Replace .achtendertig with .negenendertig
            voortgangsbalk.removeClass('achtendertig').addClass('negenendertig');
        } else if (voortgangsbalk.hasClass('negenendertig')) {
            // Replace .negenendertig with .vol
            voortgangsbalk.removeClass('negenendertig').addClass('vol');
        }

        // Update the amount text
        var currentAmount = parseInt($('#amount').text());
        if (currentAmount < 40) {
            $('#amount').text(currentAmount + 1);
        }

        // Check if .voortgangsbalk has .vol
        if (voortgangsbalk.hasClass('vol')) {
            // Remove 'disabled' attribute from the button
            $('button.full-width').removeAttr('disabled');
        }
    });
});

document.getElementById("afmeldKnop").addEventListener("click", function() {
    window.location.href = "./index2.html";
});

// Event listener for the button
document.getElementById("suggestButton").addEventListener("click", function() {
	// Show the .suggestie div immediately
	var suggestieDiv = document.querySelector(".suggestie");
	suggestieDiv.style.display = "block";
	this.disabled = true;

	// Show waiting dots
	var dots = 1;
	var dotsInterval = setInterval(function() {
		textarea.value += ".".repeat(dots);
		dots = (dots % 3) + 1; // Cycle between 1, 2, and 3 dots
	}, 500);

	// Start typing after a delay of 1500ms
	setTimeout(function() {
		clearInterval(dotsInterval); // Stop showing waiting dots
		textarea.value = ""; // Clear textarea
		typeText(); // Start typing
	}, 3000);
});

// Get the sluiten button element
var closeButton = document.getElementById("suggestie-sluiten");

// Get the Geef suggestie button element
var suggestButton = document.getElementById("suggestButton");

// Event listener for the sluiten button
closeButton.addEventListener("click", function() {
    // Hide the .suggestie div
    var suggestieDiv = document.querySelector(".suggestie");
    suggestieDiv.style.display = "none";

    // Re-enable the Geef suggestie button
    suggestButton.disabled = false;

    // Clear the textarea
    var textarea = document.getElementById("suggestieTextarea");
    textarea.value = "";
});
						
// Get the modal
var modal = document.getElementById("beeldvergelijker");

// Get the button that opens the modal
var btn = document.getElementById("openBeeldvergelijker");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("beeldvergelijker-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".richtlijnenFunctieOpenen").addEventListener("click", function() {
        var richtlijnenFunctie = document.querySelector(".richtlijnenFunctie");
        if (richtlijnenFunctie.style.display === "none" || richtlijnenFunctie.style.display === "") {
            richtlijnenFunctie.style.display = "flex";
        } else {
            richtlijnenFunctie.style.display = "none";
        }
    });

    document.querySelector(".richtlijnenFunctieSluiten").addEventListener("click", function() {
        var richtlijnenFunctie = document.querySelector(".richtlijnenFunctie");
        richtlijnenFunctie.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".problemLengthOpenen").addEventListener("click", function() {
        var problemLength = document.querySelector(".problemLengthPanel");
        if (problemLength.style.display === "none" || problemLength.style.display === "") {
            problemLength.style.display = "flex";
        } else {
            problemLength.style.display = "none";
        }
    });

    document.querySelector(".problemLengthSluiten").addEventListener("click", function() {
        var problemLength = document.querySelector(".problemLengthPanel");
        problemLength.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class ".richtlijnenBeeldbeschrijvingenOpenen"
    var openButtons = document.querySelectorAll(".richtlijnenBeeldbeschrijvingenOpenen");

    // Add event listener to each open button
    openButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var richtlijnenBeeldbeschrijvingen = document.querySelector(".richtlijnenBeeldbeschrijvingen");
            if (richtlijnenBeeldbeschrijvingen.style.display === "none" || richtlijnenBeeldbeschrijvingen.style.display === "") {
                richtlijnenBeeldbeschrijvingen.style.display = "flex";
            } else {
                richtlijnenBeeldbeschrijvingen.style.display = "none";
            }
        });
    });

    // Add event listener for closing guidelines
    document.querySelector(".richtlijnenBeeldbeschrijvingenSluiten").addEventListener("click", function() {
        var richtlijnenBeeldbeschrijvingen = document.querySelector(".richtlijnenBeeldbeschrijvingen");
        richtlijnenBeeldbeschrijvingen.style.display = "none";
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with class ".richtlijnenBeeldbeschrijvingenOpenen"
//     var openButtons = document.querySelectorAll(".richtlijnenBeeldbeschrijvingenOpenen");

//     // Add event listener to each open button
//     openButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             var richtlijnenBeeldbeschrijvingen = document.querySelector(".richtlijnenBeeldbeschrijvingen");
//             if (richtlijnenBeeldbeschrijvingen.style.display === "none" || richtlijnenBeeldbeschrijvingen.style.display === "") {
//                 richtlijnenBeeldbeschrijvingen.style.display = "flex";
//             } else {
//                 richtlijnenBeeldbeschrijvingen.style.display = "none";
//             }
//         });
//     });

//     // Add event listener for closing guidelines
//     document.querySelector(".richtlijnenBeeldbeschrijvingenSluiten").addEventListener("click", function() {
//         var richtlijnenBeeldbeschrijvingen = document.querySelector(".richtlijnenBeeldbeschrijvingen");
//         richtlijnenBeeldbeschrijvingen.style.display = "none";
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Get the textarea and button elements
    var kbbTextarea = document.getElementById('kbb');
    var saveButton = document.querySelector('.primary.bbOpslaan');

    // Function to check the textarea and enable/disable the button
    function checkTextarea() {
        if (kbbTextarea.value.trim().length > 0) {
            saveButton.removeAttribute('disabled');
        } else {
            saveButton.setAttribute('disabled', 'disabled');
        }
    }

    // Add event listener to the textarea to check on input
    kbbTextarea.addEventListener('input', checkTextarea);

    // Initial check in case there is already text in the textarea
    checkTextarea();
});
