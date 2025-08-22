var intro = document.querySelector(".intro")
var header = document.getElementById("sigma")
var audio = document.getElementById('music');
var mutetxt = document.getElementById("mutetxt")
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
    audio.play();
}

function mutebtn() {
    if (muted == false) {
        audio.pause();
        muted = true;
        mutetxt.textContent = "muted"
    } else {
        audio.play();
        muted = false;
        mutetxt.textContent = "mute?"
    }
}