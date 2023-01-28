const songName = document.getElementById("song-name");

songName.innerText = "It's Not The Same Anymore";

const song = document.getElementById("audio");

const play = document.getElementById("play");

let isPlaying = false;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle");
  play.querySelector(".bi").classList.add("bi-pause-circle");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle");
  play.querySelector(".bi").classList.remove("bi-pause-circle");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
	if (isPlaying === true) {
		pauseSong();
	}
	else {
		playSong();
	}
}

play.addEventListener("click", playPauseDecider);
