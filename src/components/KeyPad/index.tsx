import { Key } from '@/components/Key';

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function KeyPad() {
  return (
    <div className="key_pad">
      {KEYS.map((value) => (
        <Key value={value} />
      ))}
    </div>
  );
}
