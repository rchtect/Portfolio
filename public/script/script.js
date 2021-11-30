var element = document.getElementById('container')
var section = document.getElementById('section')
function playClick() {
    document.getElementById("clickAudio").pause();
    document.getElementById("clickAudio").currentTime = 0;
    document.getElementById("clickAudio").play();
  }

function needBtn() {
  var element = document.querySelector('#up-icn')
  element.classList.remove("hide");
  element.classList.add("show");
}

function noNeedBtn() {
  var element = document.querySelector('#up-icn')
  element.classList.remove("show");
  element.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.container')
  .addEventListener('scroll', function() {
    element.classList.remove("hide");
    element.classList.add("show");
  }, false);
})

function enableGrad() {
  document.documentElement.style.setProperty('--bg-grad', 'linear-gradient(to left, #003cff2d 0%, #ff000031 100%)');
}

function disableGrad() {
  document.documentElement.style.setProperty('--bg-grad', 'none');
}
