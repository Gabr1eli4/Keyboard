import type { TKeyboardTypes } from '@/types/experiment';

import { Key } from '@/components/Key';

interface INumPadProps {
  type: TKeyboardTypes;
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function NumPad({ type }: INumPadProps) {
  return (
    <div className="num_pad">
      {KEYS.map((value) => (
        <Key key={value} value={value} type={type} />
      ))}
    </div>
  );
}
