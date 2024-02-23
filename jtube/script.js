// Function to set the video source and play it
function playVideo() {
    var videoUrlInput = document.getElementById('videoUrl');
    var videoUrl = videoUrlInput.value;

    // Extract video ID from the URL
    var videoId = extractVideoID(videoUrl);

    if (videoId) {
        var iframe = document.getElementById('videoPlayer');
        iframe.src = 'https://www.youtube.com/embed/' + videoId;
    } else {
        alert('Invalid YouTube URL');
    }
}

// Function to extract video ID from YouTube URL
function extractVideoID(url) {
    var regExp = /(?:\?v=|\/embed\/|\/watch\?v=|youtu.be\/|\/embed\/|\/v\/|\/e\/|^https:\/\/www\.youtube\.com\/watch\?v=|^https:\/\/www\.youtube\.com\/embed\/|^https:\/\/www\.youtube\.com\/v\/|^https:\/\/youtu.be\/)([a-zA-Z0-9_-]{11})/;
    var match = url.match(regExp);
    return match ? match[1] : null;
}

// Add event listener for the button after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var playVideoButton = document.getElementById('playVideoButton');
    
    if (playVideoButton) {
        playVideoButton.addEventListener('click', playVideo);
    } else {
        console.error('Button not found');
    }
});
