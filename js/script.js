const songName = document.getElementById("song-name");

const isNotTheSameAnimore = {
	songName : "It's Not The Same Anymore",
	artist : "Rex Orange County",
	file : "rex-orange-county-its-not-the-same-anymore"
};

const karma = {
	songName : "Karma",
	artist : "Taylor Swift",
	file : "taylor-swift-karma"
};

const untitled = {
	songName : "untitled",
	artist : "Rex Orange County",
	file : "rex-orange-county-untitled"
};

// songName.innerText = "It's Not The Same Anymore";

const bandName = document.getElementById("band-name");

// bandName.innerText = "Rex Orange County";

const cover = document.getElementById("cover")

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
