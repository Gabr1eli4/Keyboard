export type TKeyboardTypes = keyof typeof KEYBOARDS;

export const enum KEYBOARDS {
  NUM_PAD = 'NUM_PAD',
  KEY_PAD = 'KEY_PAD',
  BOTH = 'BOTH',
}

export type TChartData = {
  name: string;
  time: number;
};
