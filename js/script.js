const songName = document.getElementById("song-name");

const isNotTheSameAnimore = {
	songName : "Untitled",
	artist : "Rex Orange County",
	file : "musica-1",
};

const karma = {
	songName : "Karma",
	artist : "Taylor Swift",
	file : "musica-2"
};

const untitled = {
	songName : "Its Not The Same Anymore",
	artist : "Rex Orange County",
	file : "musica-3"
};

const playlist = [isNotTheSameAnimore, karma, untitled];
let index = 0;

// songName.innerText = "It's Not The Same Anymore";

const bandName = document.getElementById("band-name");

// bandName.innerText = "Rex Orange County";

const cover = document.getElementById("below-cover");

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

function loadSong() {
	cover.src = `../midia/${playlist[index].file}.jpg`;
	song.src = `../midia/${playlist[index].file}.mp3`;
	songName.innerText = playlist[index].songName;
	bandName.innerText = playlist[index].artist;
}

loadSong();

play.addEventListener("click", playPauseDecider);
