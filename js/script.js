const songName = document.getElementById("song-name");

songName.innerText = "It's Not The Same Anymore";

const song = document.getElementById("audio");

const play = document.getElementById("play");

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle");
  play.querySelector(".bi").classList.add("bi-pause-circle");
  song.play();
}

function pauseSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle");
  play.querySelector(".bi").classList.add("bi-pause-circle");
  song.play();
}

play.addEventListener("click", playSong);
