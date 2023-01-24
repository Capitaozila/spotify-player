const songName = document.getElementById("song-name");

songName.innerText = "It's Not The Same Anymore";

const song = document.getElementById("audio");

const play = document.getElementById("play");

function playSong() {
	// play.querySelector(".d").classList.remove("")
	song.play();
};

play.addEventListener("click", playSong);