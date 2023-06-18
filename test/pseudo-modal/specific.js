const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
	modal.showModal();
});

closeModal.addEventListener('click', () => {
	modal.close();
})

// btnOpenModal.AddEventListener("click", () => {
// 	btnOpenModal.nextElementSibling.showModal();
// });

// btnOpenDialog.AddEventListener("click", () => {
// 	btnOpenDialog.nextElementSibling.show();
// });

// btnClose.forEach((btn) => {
// 	btn.addEventListener("click", () => {
// 		btn.parentElement.close();
// 	});
// });