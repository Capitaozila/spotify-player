const songName = document.getElementById("song-name");

function createSong(name, artist, file) {
  return {
    songName: name,
    artist: artist,
    file: file,
  };
}

const isNotTheSameAnimore = createSong(
  "Untitled",
  "Rex Orange County",
  "musica_1"
);

const karma = createSong("Karma", "Taylor Swift", "musica_2");

const untitled = createSong(
  "I'ts Not The Same Anymore",
  "Rex Orange County",
  "musica_3"
);

const literalMe = createSong("Literal Me", "B3AST", "musica_4");

const snowfall = createSong("Snowfall", "Dreamscape", "musica_5");

const originalPlaylist = [
  isNotTheSameAnimore,
  karma,
  untitled,
  literalMe,
  snowfall,
];

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
const repeatButton = document.getElementById("repeat");
const songCurrentTime = document.getElementById("song-time");
const songTotalTime = document.getElementById("total-time");

let isPlaying = false;
let isShuffle = false;
let repeatOn = false;

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

function updateProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty("--progress", `${barWidth}%`);
  songCurrentTime.innerText = toHoursMinutesSeconds(song.currentTime);
}

function jumpTo(e) {
  const width = progressContainer.clientWidth;
  const clickPosition = e.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleButtonClicked() {
  if (!isShuffle) {
    isShuffle = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add("active");
  } else {
    isShuffle = false;
    sortedPlaylist = [...originalPlaylist];
    shuffleButton.classList.remove("active");
  }
}

function repeatButtonClicked() {
  if (!repeatOn) {
    repeatOn = true;
    repeatButton.classList.add("active");
  } else {
    repeatOn = false;
    repeatButton.classList.remove("active");
  }
}

function nextOrRepeat() {
  if (repeatOn) {
    playSong();
  } else {
    nextSong();
  }
}

function updateTotalTime() {
  toHoursMinutesSeconds(song.duration);
  songTotalTime.innerText = toHoursMinutesSeconds(song.duration);
}

function toHoursMinutesSeconds(originalTime) {
  let hours = Math.floor(originalTime / 3600);
  let minutes = Math.floor((originalTime - hours * 3600) / 60);
  let seconds = Math.floor(originalTime - hours * 3600 - minutes * 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

loadSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgress);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime);
progressContainer.addEventListener("click", jumpTo);
shuffleButton.addEventListener("click", shuffleButtonClicked);
repeatButton.addEventListener("click", repeatButtonClicked);
