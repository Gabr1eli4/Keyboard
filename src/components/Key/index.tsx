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
    key_btn: type === 'KEY_PAD',
    num_btn: type === 'NUM_PAD',
    zero: type === 'NUM_PAD' && value === '0',
    selected: value === currentDigit,
  });

  return <div className={className}>{value}</div>;
}
