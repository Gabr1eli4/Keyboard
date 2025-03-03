import type { TKeyboardTypes } from '@/types/experiment';

import { Key } from '@/components/Key';

interface IKeyPadProps {
  type: TKeyboardTypes;
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function KeyPad({ type }: IKeyPadProps) {
  return (
    <div className="key_pad">
      {KEYS.map((value) => (
        <Key key={value} value={value} type={type} />
      ))}
    </div>
  );
}
