$(document).ready(function() {
    var slider = $('#autoWidth').lightSlider({
        item: 3,
        controls: false,
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    $('#goToPrevSlide').on('click', function () {
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').on('click', function () {
        slider.goToNextSlide();
    });
  });

    var vid = document.getElementById("vid");
    function playVid(){
        vid.play();
        document.getElementById("playicon").style.display = "none";
    }

    function pauseVid(){
        // var value =  document.getElementById("vid");
        // console.log(value);
        vid.pause();
        document.getElementById("playicon").style.display = "block";
    }

    document.getElementById("mute").style.visibility = "hidden";

    function vidControls(){
        document.getElementById("controls").style.visibility = "visible";
    }

    function hideControls(){
        document.getElementById("controls").style.visibility = "hidden";
    }

    function volume(){
        document.getElementById("mute").style.visibility = "visible";
        document.getElementById("volume").style.visibility = "hidden";
        vid.volume = 0;
    }

    function mute(){
        document.getElementById("volume").style.visibility = "visible";
        document.getElementById("mute").style.visibility = "hidden";
        vid.volume = 1;
    }

    function getPlaySpeed(){
        var playBackValue = document.getElementById("play-speed").value;
        if(playBackValue == 0.5)
            vid.playbackRate = 0.5;
        else if(playBackValue == 0.75)
            vid.playbackRate = 0.75;
        else if(playBackValue == 1.25)
            vid.playbackRate = 1.25;
        else if(playBackValue == 1.5)
            vid.playbackRate = 1.5;
        else
            vid.playbackRate = 1;
    }

    function openFullscreen() {
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
        } else if (vid.webkitRequestFullscreen) { /* Safari */
            vid.webkitRequestFullscreen();
        } else if (vid.msRequestFullscreen) { /* IE11 */
            vid.msRequestFullscreen();
        }
      }

    