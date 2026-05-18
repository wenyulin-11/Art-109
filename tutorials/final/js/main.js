
const playlist = [
    { name: "灰色头像.mp3", artist: "歌手: 许嵩 (Vae)", src: "media/灰色头像.mp3", url: "media/灰色头像.mp3" },
    { name: "玫瑰花的葬礼.mp3", artist: "歌手: 许嵩 (Vae)", src: "media/玫瑰花的葬礼.mp3", url: "media/玫瑰花的葬礼.mp3" },
    { name: "断桥残雪.mp3", artist: "歌手: 许嵩 (Vae)", src: "media/许嵩-断桥残雪.mp3", url: "media/许嵩-断桥残雪.mp3" }
];

let currentIndex = 0;

// Get DOM elements related to the music player
const audio = document.getElementById('qzone-audio');
const playBtn = document.getElementById('btn-play');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const songDisplay = document.getElementById('display-song');
const artistDisplay = document.getElementById('display-artist');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const timeDisplay = document.getElementById('time-display');

// Function to load a song
function loadSong(song) {
    songDisplay.innerText = song.name;
    artistDisplay.innerText = song.artist;
    audio.src = song.url;
}

// Toggle between play and pause
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "■ PAUSE";
        playBtn.style.color = "#00ffcc";
    } else {
        audio.pause();
        playBtn.innerHTML = "▶ PLAY";
        playBtn.style.color = "#ffda79";
    }
}

// Switch to the next song
function nextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(playlist[currentIndex]);
    audio.play();
    playBtn.innerHTML = "■ PAUSE";
    playBtn.style.color = "#00ffcc";
}

// Switch to the previous song
function prevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentIndex]);
    audio.play();
    playBtn.innerHTML = "■ PAUSE";
    playBtn.style.color = "#00ffcc";
}

// Bind play button to toggle play/pause
playBtn.addEventListener('click', togglePlay);

// Listen for audio time updates (controls progress bar and time text display)
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    if (!duration) return;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    let curMin = Math.floor(currentTime / 60);
    let curSec = Math.floor(currentTime % 60);
    let durMin = Math.floor(duration / 60);
    let durSec = Math.floor(duration % 60);

    if (curSec < 10) curSec = '0' + curSec;
    if (durSec < 10) durSec = '0' + durSec;
    timeDisplay.innerText = `${curMin}:${curSec} / ${durMin}:${durSec}`;
});

// Listen for clicks on the progress bar to skip playback progress
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

// Extra binding: add click listeners to the switching buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Automatically switch to the next song when playback ends
audio.addEventListener('ended', nextSong);

// Load the default song when opening the webpage for the first time
loadSong(playlist[currentIndex]);




