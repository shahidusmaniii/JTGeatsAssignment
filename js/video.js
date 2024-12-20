let vid = document.querySelector(".cooking-vid");

function playPauseVideo() {
  if (!vid.paused) {
    vid.pause();
    document.querySelector(".play-pause-effect").style.backgroundImage =
      "url('../icons/play.svg')";
  } else {
    vid.play();
    document.querySelector(".play-pause-effect").style.backgroundImage = "none";
  }
}
