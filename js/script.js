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

const playlist = [isNotTheSameAnimore, karma, untitled];
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
  } else {
    playSong();
  }
}

function loadSong() {
  cover.src = `../fotos/${playlist[index].file}.jpg`;
  song.src = `../musicas/${playlist[index].file}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index--;
  }
  loadSong();
  playSong();
}

// função nova música

function nextSong() {
  if (index === playlist.length - 1) {
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

loadSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", jumpTo);