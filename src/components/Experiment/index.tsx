import type { TKeyboardTypes } from '@/types/experiment';

import { generateDefiniteSequence, generateNumberSequence } from '@/utils';
import { handleDynamicSequence } from '@/utils/experiment';
import { Keyboard } from '@/components/Keyboard';
import { useState } from 'react';

interface IExperimentProps {
  keyboardType: TKeyboardTypes;
  isRandom?: boolean;
}

const DEFINITE_VALUE = 5;

export function Experiment({ keyboardType, isRandom }: IExperimentProps) {
  const [sequence, setSequence] = useState<Array<string>>();

  const handleStart = async () => {
    const _sequence = isRandom
      ? generateNumberSequence(10)
      : generateDefiniteSequence(DEFINITE_VALUE);
    setSequence(_sequence);
    await handleDynamicSequence(_sequence);
  };

  return (
    <div>
      <h1>Keyboard (1)</h1>
      <Keyboard keyboardType={keyboardType} sequence={sequence} />
      <button onClick={handleStart}>Запустить</button>
    </div>
  );
}
