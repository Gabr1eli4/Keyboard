import type { TKeyboardTypes } from '@/types/experiment';

import { Key } from '@/components/Key';

interface IKeyPadProps {
  type: TKeyboardTypes;
}

const KEYS = [
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
];

export function KeyPad({ type }: IKeyPadProps) {
  return (
    <div className="key_pad">
      {KEYS.map((value) => (
        <Key key={value} value={value} type={type} />
      ))}
    </div>
  );
}
