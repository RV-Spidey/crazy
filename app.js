document.getElementById('toggleButton').addEventListener('click', function() {
    const hiddenContent = document.getElementById('hiddenContent');
    
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
        this.textContent = 'Close Hidden Content';
    } else {
        hiddenContent.classList.add('hidden');
        this.textContent = 'Open Hidden Content';
    }
});
