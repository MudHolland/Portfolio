import matplotlib.pyplot as plt
import numpy as np

# Data for plotting
wavelengths = np.logspace(-9, 1, 500)  # from 1 nm to 10 meters
frequencies = np.logspace(0, 7, 500)  # from 1 Hz to 10 MHz

# Create a figure and axes
fig, ax = plt.subplots(figsize=(10, 6))

# Hide the color blocks for visible light and audible sound
ax.axhspan(20, 20000, color='yellow', alpha=0.1, label='Audible sound')
ax.axvspan(380e-9, 740e-9, color='lightblue', alpha=0.3, label='Visible light')

# Plot the overlapping rectangular block for humans
ax.add_patch(
	plt.Rectangle((380e-9, 20), 
	360e-9, 20000-20, 
	alpha=0.3, 
	color='lightgreen', 
	label='Audiovisual spectrum'))
ax.text(
	500e-9, 500, 
	'Human', 
	verticalalignment='bottom', 
	rotation='vertical', 
	color='black')

# Plot the overlapping rectangular block for bat
ax.add_patch(
	plt.Rectangle((5e-6, 50), 
	25e-6, 950, 
	alpha=0.3, 
	color='lightgreen', 
	label='Audiovisual spectrum'))
ax.text(
	10e-6, 200, 
	'Bat', 
	verticalalignment='bottom', 
	rotation='vertical', 
	color='black')

# Plot the overlapping rectangular block for the audible and visible part that dogs can hear and see
ax.add_patch(plt.Rectangle((320e-9, 40), 430e-9, 60000-40, alpha=0.3, color='lightgreen', label='Audiovisual spectrum for dogs'))
ax.text(340e-9, 1000, 'Dog', verticalalignment='bottom', rotation='vertical', color='black')


# Plot the overlapping rectangular block for the audible range that bats can perceive
ax.add_patch(plt.Rectangle((20e-9, 20e3), 1e-6, 180e3, alpha=0.3, color='lightblue', label='Hearing range for bats'))
# (20 kHz - 200 kHz, 0 Hz)

# Annotations for the hearing range for bats
ax.text(30e3, 0.5, 'Bat', verticalalignment='bottom', rotation='vertical', color='black')






# Plot additional electromagnetic spectrum features
ax.axvline(10e-9, color='black', linestyle='--', label='X-rays (10 nm)')
ax.axvline(280e-9, color='purple', linestyle='--', label='Ultraviolet (280 nm)')
ax.axvline(1e-6, color='green', linestyle='--', label='Infrared (1 µm)')
ax.axvline(1e-2, color='blue', linestyle='--', label='Microwaves (1 cm)')
ax.axvline(1, color='grey', linestyle='--', label='Radio Waves (1 m)')

# Add FM-radio, ultrasound, and Wi-Fi frequency bands
ax.axhline(100e6, color='orange', linestyle='--', label='FM-radio (100 MHz)')
ax.axhline(2e6, color='magenta', linestyle='--', label='Ultrasound (2 MHz)')
ax.axhline(2.4e9, color='darkgreen', linestyle='--', label='Wi-Fi 2.4 GHz')
ax.axhline(5e9, color='darkgreen', linestyle='--', label='Wi-Fi 5 GHz')

# Set labels and title
ax.set_xlabel('Wavelength (m)')
ax.set_ylabel('Frequency (Hz)')
ax.set_title('Electromagnetic and Audible Spectrum')

# Annotations for the visible spectrum
# ax.text(500e-9, 1e7, 'Visible Light', verticalalignment='bottom', color='black')

# Set log scale for both axes
ax.set_xscale('log')
ax.set_yscale('log')

# Adjust tick labels
ax.set_xticks([1e-9, 1e-8, 1e-7, 1e-6, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1, 1, 10, 100, 1e3])
ax.set_xticklabels(['1 nm', '10 nm', '100 nm', '1 µm', '10 µm', '100 µm', '1 mm', '10 mm', '100 mm', '1 m', '10 m', '100 m', '1 km'])
ax.set_yticks([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000])
ax.set_yticklabels(['1 Hz', '10 Hz', '100 Hz', '1 kHz', '10 kHz', '100 kHz', '1 MHz', '10 MHz', '100 MHz', '1 GHz', '10 GHz'])

# Show legend
ax.legend()

# Show plot
plt.grid(True, which="both", ls="--", color='gray', alpha=0.5)
plt.tight_layout()
plt.show()
