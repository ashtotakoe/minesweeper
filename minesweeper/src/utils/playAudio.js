import clickSound from '../assets/audio/button-click1.mp3';

const songs = {
  click: clickSound,
};

export function playAudio(type) {
  const audio = new Audio();
  audio.src = songs[type];
  audio.play();
}
