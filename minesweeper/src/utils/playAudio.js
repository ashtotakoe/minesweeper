import clickSound from '../assets/audio/button-click1.mp3';
import gameStartSound from '../assets/audio/game-start.mp3';
import explosionSound from '../assets/audio/mine-explosion.mp3';
import flagSound from '../assets/audio/button-click2.mp3';
import { minesweeperState } from './services/minesweeper-state';

const songs = {
  click: clickSound,
  start: gameStartSound,
  defeat: explosionSound,
  flag: flagSound,
};

export function playAudio(type) {
  if (minesweeperState.isSoundOn) {
    const audio = new Audio();
    audio.src = songs[type];
    audio.play();
  }
}
