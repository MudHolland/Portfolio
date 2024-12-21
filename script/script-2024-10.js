document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});

document.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');

    // Calculate the pixel equivalent of 100vh
    var threshold = window.innerHeight; // This gives you the pixel value of 100vh

    // Log the current scroll position and threshold
    console.log('Scroll position:', window.scrollY);
    console.log('Threshold (100vh):', threshold);

    if (window.scrollY > threshold) {
        console.log('Scrolled past threshold: changing nav background and height');
        nav.style.backgroundColor = 'var(--bg-color)';  // Replace with your desired background color variable
        nav.style.height = '4rem';
    } else {
        console.log('Above threshold: resetting nav background and height');
        nav.style.backgroundColor = 'transparent';
        nav.style.height = '6rem';
    }
});

const h1Element = document.querySelector('h1');

// Track taps and timing
let tapCount = 0;
let lastTapTime = 0;

// Function to switch stylesheets
function switchStylesheet() {
    const stylesheet = document.querySelector('link[rel="stylesheet"][href*="style"]');
    if (stylesheet) {
        const currentHref = stylesheet.getAttribute('href');
        const newHref = currentHref === '/css/style-2024-10.css' ? '/css/style-2024-12.css' : '/css/style-2024-10.css';
        stylesheet.setAttribute('href', newHref);
    }
}

// Handle tap events
h1Element.addEventListener('click', () => {
    const currentTime = new Date().getTime();

    // Reset tap count if too much time has passed since the last tap
    if (currentTime - lastTapTime > 500) {
        tapCount = 0;
    }

    tapCount++;
    lastTapTime = currentTime;

    // Switch stylesheet if tapped 3 times quickly
    if (tapCount === 3) {
        switchStylesheet();
        tapCount = 0; // Reset the tap count after switching
    }
});



// document.getElementById('checkPositions').addEventListener('click', function() {
//     const elements = document.querySelectorAll('.shadow');
//     const results = [];

//     elements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;

//         if (rect.top <= 0) {
//             results.push({ element, value: -1 }); // Element is at the top of the screen
//         } else if (rect.bottom >= viewportHeight) {
//             results.push({ element, value: 1 }); // Element is at the bottom of the screen
//         }
//     });

//     // Display the results
//     if (results.length > 0) {
//         const outputText = results.map(result => {
//             const positionText = result.value === -1 ? "at the top" : "at the bottom";
//             return `${result.element.textContent} is ${positionText} of the screen.`;
//         }).join('\n');
//         document.getElementById('output').textContent = outputText;
//     } else {
//         document.getElementById('output').textContent = "No elements are at the top or bottom of the screen.";
//     }
// });
  





// document.querySelectorAll('.ripple-button').forEach(button => {
//     button.addEventListener('click', function(e) {
//         const ripple = document.createElement('span');
//         ripple.classList.add('ripple');

// 		// Get the computed background color of the button
// 		const buttonColor = getComputedStyle(button).backgroundColor;
// 		ripple.style.background = buttonColor; // Set ripple color to button background

//         const rect = button.getBoundingClientRect();
//         const size = Math.max(rect.width, rect.height);
//         ripple.style.width = ripple.style.height = `${size}px`;

//         // Position the ripple at the click position
//         ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
//         ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

//         button.appendChild(ripple);

//         // Remove ripple after animation ends
//         ripple.addEventListener('animationend', () => {
//             ripple.remove();
//         });
//     });
// });
