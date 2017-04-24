    var player;
    window.lectureVideo = false;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            width: '150',
            height: '150',
            videoId: 'lSZqC-Nezlw',
            playerVars: {
                playlist: 'pfh1BGUCDRE,fi8LLmw6GRU'
            },
            events: {
                onReady: initialize
            }
        });
    };

    
    function initialize(event){

    var time_update_interval;

    // Update the controls on load
        updateTimerDisplay();
        updateProgressBar();

    // Clear any old interval.
        clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
        time_update_interval = setInterval(function () {
            updateTimerDisplay();
            updateProgressBar();
        }, 1000)     

    };



// This function is called by initialize()
function updateTimerDisplay(){
// Update current time text display.
$('#current-time').text(formatTime(player.getCurrentTime() ));
$('#duration').text(formatTime(player.getDuration() ));
}

function formatTime(time){
    time = Math.round(time);

    var min = Math.floor(time / 60);
    var sec = time - min * 60;

    sec = sec < 10 ? '0' + sec : sec;

    return min + ":" + sec;
}


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}

$(document).ready(function(){

    onYouTubeIframeAPIReady;


window.onload = function(){
    $('#central-button').click(function(){
        if (! window.lectureVideo) { 
         player.playVideo(); 
         $('#central-button').attr("src","pause.png"); 
         window.lectureVideo  = true;
        }else { 
         player.pauseVideo();
         $('#central-button').attr("src","play.png"); 
         window.lectureVideo  = false;
        }
       });
    $('#button-next').click(function(){
        player.nextVideo();
    });
    $('#button-previous').click(function(){
        player.previousVideo();
    });


    $('#progress-bar').mouseup(function (e) {
        console.log("j'ai cliqué sur la barre");
        // Calculate the new time for the video.
        // new time in seconds = total duration in seconds * ( value of range input / 100 )
        var newTime = player.getDuration() * (e.target.value / 100);

        // Skip video to new time.
        player.seekTo(newTime);

    });
}
});