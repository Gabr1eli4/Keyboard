import type { TKeyboardTypes } from '@/types/experiment';

const randomDigit = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min).toString();

export const generateNumberSequence = (
  type: TKeyboardTypes,
  length: number,
  min: number = 0,
  max: number = 10,
): Array<string> => {
  let result: Array<string> = [];
  switch (type) {
    case 'KEY_PAD':
      result = Array.from({ length }).map(() => `Digit${randomDigit(max, min)}`);
      break;

    case 'NUM_PAD':
      result = Array.from({ length }).map(() => `Numpad${randomDigit(max, min)}`);
      break;

    default:
      result = Array.from({ length }).map(() => {
        const chance = Math.round(Math.random());
        if (chance) return `Numpad${randomDigit(max, min)}`;
        return `Digit${randomDigit(max, min)}`;
      });
  }
  return result;
};

export const generateDefiniteSequence = (
  type: TKeyboardTypes,
  value: number,
  length: number = 10,
): Array<string> => {
  let result: Array<string> = [];
  switch (type) {
    case 'KEY_PAD':
      result = Array.from({ length }).map(() => `Digit${value.toString()}`);
      break;

    case 'NUM_PAD':
      result = Array.from({ length }).map(() => `Numpad${value.toString()}`);
      break;

    default:
      result = Array.from({ length }).map(() => {
        const chance = Math.round(Math.random());
        if (chance) return `Numpad${value.toString()}`;
        return `Digit${value.toString()}`;
      });
  }
  return result;
};
