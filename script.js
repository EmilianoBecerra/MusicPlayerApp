let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("controlIcon");
let iIcon = document.getElementById("i-icon")

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (iIcon.classList.contains("fa-pause")) {
    song.pause();
    iIcon.classList.remove("fa-pause");
    iIcon.classList.add("fa-play");
  } else {
    song.play();
    iIcon.classList.remove("fa-play");
    iIcon.classList.add("fa-pause");
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  iIcon.classList.remove("fa-play");
  iIcon.classList.add("fa-pause");
};

ctrlIcon.addEventListener("click", playPause);
