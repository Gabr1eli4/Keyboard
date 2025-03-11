import type { TKeyboardTypes } from '@/types/experiment';

import { useCurrentDigit } from '@/store/experiment';
import classNames from 'classnames';

interface IKeyProps {
  value: string;
  type: TKeyboardTypes;
}

export function Key({ value, type }: IKeyProps) {
  const currentDigit = useCurrentDigit();

  const className = classNames({
    key_btn: type === 'KEY_PAD' || (type === 'BOTH' && value.includes('Digit')),
    num_btn: type === 'NUM_PAD' || (type === 'BOTH' && value.includes('Numpad')),
    zero: (type === 'NUM_PAD' || type === 'BOTH') && value === 'Numpad0',
    selected: value === currentDigit,
  });

  return <div className={className}>{value.replace(/[^0-9]/g, '')}</div>;
}
