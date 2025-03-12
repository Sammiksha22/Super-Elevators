document.querySelectorAll('.hover-video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play(); // Play the video when hovered
    });
    
    video.addEventListener('mouseleave', () => {
        video.pause(); // Pause the video when hover ends
        video.currentTime = 0; // Reset to the start of the video
    });
});
