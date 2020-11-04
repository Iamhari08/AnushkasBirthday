alert("WAIT!\nIf the song is not playing at the background,\nCheck the top left corner.\nBest to view it on Microsoft edge");
alert("Enjoy every bit of it.");
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
