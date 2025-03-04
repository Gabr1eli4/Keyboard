import type { TKeyboardTypes } from '@/types/experiment';

import { KEYBOARDS } from '@/types/experiment';
import { KeyPad } from '@/components/KeyPad';
import { NumPad } from '@/components/NumPad';

interface IKeyboardProps {
  type: TKeyboardTypes;
}

export function Keyboard({ type }: IKeyboardProps) {
  return (
    <div className="keyboard">
      {type === KEYBOARDS.KEY_PAD ? <KeyPad type={type} /> : <NumPad type={type} />}
    </div>
  );
}
