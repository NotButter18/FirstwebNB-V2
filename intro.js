var intro = document.querySelector(".intro")
var header = document.getElementById("sigma")
var counter = 0
var cyclecount = 0
var muted = false

setInterval(check, 200);

function check() {
    if(cyclecount == 2) {
        header.innerHTML = "Hello :)"
        intro.style.top = "-100vh"
    }
}

function introclick() {
    cyclecount = 2
    var audio = document.getElementById('music');
    audio.play();
}

function mute() {
    if (muted == false) {
        audio.pause();
        muted = true;
    } else {
        audio.play();
        muted = false;
    }
}