import type { TKeyboardTypes } from '@/types/experiment';

import { Key } from '@/components/Key';

interface INumPadProps {
  type: TKeyboardTypes;
}

const KEYS = [
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'Numpad0',
];

export function NumPad({ type }: INumPadProps) {
  return (
    <div className="num_pad">
      {KEYS.map((value) => (
        <Key key={value} value={value} type={type} />
      ))}
    </div>
  );
}
