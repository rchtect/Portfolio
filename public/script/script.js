function playClick() {
    document.getElementById("clickAudio").pause();
    document.getElementById("clickAudio").currentTime = 0;
    document.getElementById("clickAudio").play();
  }