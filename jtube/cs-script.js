 document.addEventListener('DOMContentLoaded', function () {
 var videoQueue = [];
        var currentVideoIndex = 0;

        function addToQueue() {
    var videoURL = document.getElementById('videoURL').value;
    var videoID = extractVideoID(videoURL);
    videoQueue.push(videoID);
    updateQueueList();
  }

        function updateQueueList() {
            var queueList = document.getElementById('videoQueue');
            queueList.innerHTML = '';

            for (var i = 0; i < videoQueue.length; i++) {
                var listItem = document.createElement('li');
                var deleteButton = document.createElement('span');
                deleteButton.textContent = "X";
                deleteButton.className = "deleteButton";
                deleteButton.setAttribute('data-index', i);
                deleteButton.onclick = function() {
                    deleteVideoFromQueue(this.getAttribute('data-index'));
                };
                listItem.className = "queueItem";
                listItem.textContent = videoQueue[i];
                listItem.appendChild(deleteButton);
                queueList.appendChild(listItem);
            }
        }

        function deleteVideoFromQueue(index) {
            videoQueue.splice(index, 1);
            updateQueueList();
        }

        function playFirstVideo() {
            if (videoQueue.length > 0) {
                var firstVideoID = videoQueue[0];
                var iframe = document.getElementById('myVideo');
                iframe.src = 'https://www.youtube.com/embed/' + firstVideoID;
                currentVideoIndex = 1;
            }
        }

        function playNextVideo() {
            if (currentVideoIndex < videoQueue.length) {
                var nextVideoID = videoQueue[currentVideoIndex];
                var iframe = document.getElementById('myVideo');
                iframe.src = 'https://www.youtube.com/embed/' + nextVideoID;
                currentVideoIndex++;
            }
        }

        function extractVideoID(url) {
            var regExp = /(?:\?v=|\/embed\/|\/watch\?v=|youtu.be\/|\/embed\/|\/v\/|\/e\/|^https:\/\/www\.youtube\.com\/watch\?v=|^https:\/\/www\.youtube\.com\/embed\/|^https:\/\/www\.youtube\.com\/v\/|^https:\/\/youtu.be\/)([a-zA-Z0-9_-]{11})/;
            var match = url.match(regExp);
            if (match) {
                return match[1];
            } else {
                alert('Invalid YouTube URL');
            }
        }

           var iframe = document.getElementById('myVideo');
  if (iframe) {
    iframe.addEventListener('ended', playNextVideo);
  }
});
   