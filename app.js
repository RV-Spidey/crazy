const button = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');
let isHolding = false;

// Show hidden content when button is held
button.addEventListener('mousedown', function() {
    isHolding = true;
    hiddenContent.classList.remove('hidden');
});

// Hide hidden content when button is released
button.addEventListener('mouseup', function() {
    isHolding = false;
    hiddenContent.classList.add('hidden');
});

// Also handle mouse leaving the button area
button.addEventListener('mouseleave', function() {
    if (!isHolding) { // Only hide if the button is not being held
        hiddenContent.classList.add('hidden');
    }
});

// Add a listener for when the user releases the mouse outside the button area
document.addEventListener('mouseup', function() {
    if (isHolding) {
        isHolding = false;
        hiddenContent.classList.add('hidden');
    }
});
