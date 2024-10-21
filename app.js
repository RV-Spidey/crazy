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

// Remove mouseleave handler, since the `mouseup` on the document will handle it
document.addEventListener('mouseup', function() {
    if (isHolding) {
        isHolding = false;
        hiddenContent.classList.add('hidden');
    }
});
