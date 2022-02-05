const btn_play = document
  .getElementById("play")
  .addEventListener("click", play_video);

function play_video() {
  document.querySelector(".video").classList.toggle("active");
  v.play();
}

const btn_cross = document
  .getElementById("cross")
  .addEventListener("click", stop_video);

function stop_video() {
  document.querySelector(".video").classList.toggle("active");
  v.pause();
}

var v = document.getElementById("video");
v.addEventListener(
  "play",
  function () {
    v.play();
  },
  false
);

v.onclick = function () {
  if (v.paused) {
    v.play();
  } else {
    v.pause();
  }

  return false;
};
