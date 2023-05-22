import { playAudio } from './playAudio';

export function toggleFlagClass(event) {
  event.preventDefault();
  playAudio('flag');
  event.target.classList.toggle('flaged');
}
