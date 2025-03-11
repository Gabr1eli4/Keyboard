import type { TKeyboardTypes } from '@/types/experiment';

import { Key } from '@/components/Key';

interface INumPadProps {
  type: TKeyboardTypes;
}

const KEYS = [
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad1',
  'Numpad2',
  'Numpad3',
];

export function NumPad({ type }: INumPadProps) {
  return (
    <div className="num_pad">
      {KEYS.map((value) => (
        <Key key={value} value={value} type={type} />
      ))}
      <Key key={'Numpad0'} value={'Numpad0'} type={type} />
    </div>
  );
}
