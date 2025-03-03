import type { TKeyboardTypes } from '@/types/experiment';

import { KEYBOARDS } from '@/types/experiment';
import { KeyPad } from '@/components/KeyPad';
import { NumPad } from '@/components/NumPad';

interface IKeyboardProps {
  keyboardType: TKeyboardTypes;
  sequence?: Array<string>;
}

export function Keyboard({ keyboardType }: IKeyboardProps) {
  return (
    <div className="keyboard">{keyboardType === KEYBOARDS.KEY_PAD ? <KeyPad /> : <NumPad />}</div>
  );
}
