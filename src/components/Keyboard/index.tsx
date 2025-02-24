import { Key } from '@/components/Key';

export function Keyboard() {
  return (
    <div className="keyboard">
      {Array.from({ length: 10 }).map((_, index) => (
        <Key value={index} />
      ))}
    </div>
  );
}
