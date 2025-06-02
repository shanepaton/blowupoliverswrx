document.addEventListener('DOMContentLoaded', function() {
    const clickableImage = document.getElementById('clickableImage');
    const audioPlayer = document.getElementById('audioPlayer');
    const explosionOverlay = document.getElementById('explosionOverlay');    clickableImage.addEventListener('click', function() {
        // Create a new audio instance for overlapping sounds
        const newAudio = new Audio('./boom.mp3');
        
        // Reset the explosion GIF by reloading its source
        const explosionImg = explosionOverlay.querySelector('img');
        const currentSrc = explosionImg.src;
        explosionImg.src = '';
        explosionImg.src = currentSrc;
        
        // Show explosion overlay
        explosionOverlay.classList.add('show');
        
        // Play the new audio instance
        newAudio.play().catch(function(error) {
            console.log('Error playing audio:', error);
        });

        // Hide explosion overlay after 2 seconds
        setTimeout(function() {
            explosionOverlay.classList.remove('show');
        }, 2000);
    });
});