import { shuffleArray } from './Randomizer';

export function generateSession(bank, count) {
  return shuffleArray(bank).slice(0, count);
}
