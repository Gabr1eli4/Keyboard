import type { TKeyboardTypes } from '@/types/experiment';

import { generateDefiniteSequence, generateNumberSequence } from '@/utils';
import { handleDynamicSequence } from '@/utils/experiment';
import { Keyboard } from '@/components/Keyboard';

interface IExperimentProps {
  keyboardType: TKeyboardTypes;
  isRandom?: boolean;
}

const DEFINITE_VALUE = 5;

export function Experiment({ keyboardType, isRandom }: IExperimentProps) {
  const handleStart = async () => {
    const _sequence = isRandom
      ? generateNumberSequence(10)
      : generateDefiniteSequence(DEFINITE_VALUE);

    await handleDynamicSequence(_sequence);
  };

  return (
    <div>
      <h1>Keyboard (1)</h1>
      <Keyboard type={keyboardType} />
      <button onClick={handleStart}>Запустить</button>
    </div>
  );
}
