// Voor toekomstige functionaliteit, bijvoorbeeld het opslaan van geselecteerde ingrediënten
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                event.target.parentElement.style.textDecoration = 'line-through';
            } else {
                event.target.parentElement.style.textDecoration = 'none';
            }
        });
    });
});
