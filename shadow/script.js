const card = document.getElementById('card');

// Function to update box shadow based on gyroscope/accelerometer data
function updateBoxShadow(event) {
  const xAxis = event.beta / 10; // Adjust the division factor for sensitivity
  const yAxis = -event.gamma / 10; // Adjust the division factor for sensitivity

  card.style.boxShadow = `${xAxis}px ${yAxis}px 10px rgba(0, 0, 0, 0.2)`;
}

// Check if the device supports gyroscope/accelerometer
if (window.DeviceOrientationEvent) {
  // Add event listener to update box shadow when sensor data changes
  window.addEventListener('deviceorientation', updateBoxShadow);
} else {
  console.log('Device orientation not supported.');
}

// Reset box shadow when user touches the card
card.addEventListener('touchstart', () => {
  card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
});
