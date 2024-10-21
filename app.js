const button = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');

// Show hidden content when button is held
button.addEventListener('mousedown', function() {
    hiddenContent.classList.remove('hidden');
});

// Hide hidden content when button is released
button.addEventListener('mouseup', function() {
    hiddenContent.classList.add('hidden');
});

// Also handle mouse leaving the button area (in case the user drags the mouse away while holding)
button.addEventListener('mouseleave', function() {
    hiddenContent.classList.add('hidden');
});
