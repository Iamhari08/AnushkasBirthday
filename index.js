alert("WAIT!\nIf the song is not playing at the background,\nCheck the top left corner.\nBest to view it on laptop\nprefer microsoft edge")
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
