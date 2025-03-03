export const generateNumberSequence = (
  length: number,
  min: number = 0,
  max: number = 10,
): Array<string> =>
  Array.from({ length }).map(() => Math.floor(Math.random() * (max - min) + min).toString());

export const generateDefiniteSequence = (value: number, length: number = 10): Array<string> =>
  Array.from({ length }).map(() => value.toString());
