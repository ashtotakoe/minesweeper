const songs = {
  click: '../assets/audio/button-click1.mp3',
};

export function playAudio(type) {
  const audio = new Audio();
  audio.src = songs[type];
  audio.play();
}
