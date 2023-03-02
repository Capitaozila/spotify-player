const songName = document.getElementById("song-name");

function createSong(name, artist, file) {
  return {
    songName: name,
    artist: artist,
    file: file,
  };
}

const isNotTheSameAnimore = createSong("Untitled", "Rex Orange County", "musica_1");
const karma = createSong("Karma", "Taylor Swift", "musica_2");
const untitled = createSong("I'ts Not The Same Anymore", "Rex Orange County", "musica_3");

const originalPlaylist = [isNotTheSameAnimore, karma, untitled];
let sortedPlaylist = [...originalPlaylist];
let index = 0;

const bandName = document.getElementById("band-name");
const image = document.getElementById("imagem");
const cover = document.getElementById("cover");
const song = document.getElementById("audio");
const play = document.getElementById("play");
const next = document.getElementById("after");
const previous = document.getElementById("before");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");

let isPlaying = false;
let isShuffle = false;

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
  } else {
    playSong();
  }
}

function loadSong() {
  cover.src = `../fotos/${sortedPlaylist[index].file}.jpg`;
  song.src = `../musicas/${sortedPlaylist[index].file}.mp3`;
  songName.innerText = sortedPlaylist[index].songName;
  bandName.innerText = sortedPlaylist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = sortedPlaylist.length - 1;
  } else {
    index--;
  }
  loadSong();
  playSong();
}

// função nova música

function nextSong() {
  if (index === sortedPlaylist.length - 1) {
    index = 0;
  } else {
    index++;
  }
  loadSong();
  playSong();
}

function updateProgressBar() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty("--progress", `${barWidth}%`);
}

function jumpTo(e) {
  const width = progressContainer.clientWidth;
  const clickPosition = e.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
  let size = sortedPlaylist.length;
  let currentIndex = size - 1;

  while (currentIndex > 0) {
    let randomIndex = Math.floor(Marh.random() * size);
    let aux = preShuffleArray [currentIndex];
  }
}

function shuffleButtonClicked() {
  if (isShuffle == false) {
    isShuffle = true;
    shuffleArray();
  }

}

loadSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", jumpTo);
shuffleButton.addEventListener("click", shuffleButtonClicked);