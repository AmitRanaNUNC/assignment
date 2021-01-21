$(document).ready(function() {
    var slider = $('#autoWidth').lightSlider({
        item: 3,
        controls: false,
        autoWidth:true,
        loop:false,
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

    document.getElementById("play").style.display = "inline";
    document.getElementById("pause").style.display = "none";
    document.getElementById("volume").style.display = "inline-block";
    document.getElementById("mute").style.display = "none";

    var vid = document.getElementById("vid");
    
    function playVid(){
        console.log(Math.floor(vid.currentTime));
        console.log(Math.floor(vid.duration));
        vid.play();
        document.getElementById("playicon").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("pause").style.display = "inline";
    }

    function pauseVid(){
        vid.pause();
        document.getElementById("playicon").style.display = "block";
        document.getElementById("play").style.display = "inline";
        document.getElementById("pause").style.display = "none";
    }

    function vidControls(){
        document.getElementById("controls").style.visibility = "visible";
    }

    function hideControls(){
        document.getElementById("controls").style.visibility = "hidden";
    }

    function volume(){
        document.getElementById("mute").style.display = "inline";
        document.getElementById("volume").style.display = "none";
        vid.volume = 0;
    }

    function mute(){
        document.getElementById("volume").style.display = "inline";
        document.getElementById("mute").style.display = "none";
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

    function themeChange(event){
        var themeValue = event.target.id;
        
        if(themeValue == "theme-item-1"){
            document.getElementById("form").style.backgroundColor = "tan";
            document.getElementById("navspace").style.backgroundColor = "tan";
            document.getElementById("playicon").style.color = "tan";
        }else if(themeValue == "theme-item-2"){
            document.getElementById("form").style.backgroundColor = "cadetblue";
            document.getElementById("navspace").style.backgroundColor = "cadetblue";
            document.getElementById("playicon").style.color = "cadetblue";
        }else if(themeValue == "theme-item-3"){
            document.getElementById("form").style.backgroundColor = "#333";
            document.getElementById("navspace").style.backgroundColor = "#333";
            document.getElementById("playicon").style.color = "#333";
        }else if(themeValue == "theme-item-4"){
            document.getElementById("form").style.backgroundColor = "teal";
            document.getElementById("navspace").style.backgroundColor = "teal";
            document.getElementById("playicon").style.color = "teal";
        }else if(themeValue == "theme-item-5"){
            document.getElementById("form").style.backgroundColor = "#6c398a";
            document.getElementById("navspace").style.backgroundColor = "#6c398a";
            document.getElementById("playicon").style.color = "#6c398a";
        }
    }

    function changeVideo(videoId,videoHeading,videoDetail){

        var mainVideo = document.getElementById("vid");
        var selectedVideo = document.getElementById(videoId);
        var mainHeading = document.getElementById("vid-heading").innerText;
        var mainDetail = document.getElementById("vid-detail").innerText;        

        if(videoId){
            var mainVideoSource = mainVideo.src;
            var selectedVideoSource = selectedVideo.src;
            var mainVideoPoster = mainVideo.poster;
            var selectedVideoPoster = selectedVideo.poster;
            var itemHeading = document.getElementById(videoHeading).innerText;
            var itemDetail = document.getElementById(videoDetail).innerText;

            mainVideo.src = selectedVideoSource;
            selectedVideo.src = mainVideoSource;
            mainVideo.poster = selectedVideoPoster;
            selectedVideo.poster = mainVideoPoster;
            
            document.getElementById("vid-heading").innerText = itemHeading;
            document.getElementById("vid-detail").innerText = itemDetail;
            document.getElementById(videoHeading).innerText = mainHeading;
            document.getElementById(videoDetail).innerText = mainDetail;
        }
    }