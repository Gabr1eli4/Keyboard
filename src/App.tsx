import type { TOption } from '@/types/select';

import { Experiment } from '@/components/Experiment';
import Select from 'react-select';
import { useState } from 'react';

const experiments = [
  { label: 'Тест 1', value: 'test1' },
  { label: 'Тест 2', value: 'test2' },
  { label: 'Тест 3', value: 'test3' },
  { label: 'Тест 4', value: 'test4' },
  { label: 'Тест 5', value: 'test5' },
];

export function App() {
  const [experiment, setExperiment] = useState<string>('test1');

  const handleExperimentChange = (newValue: TOption) => {
    if (!newValue) return;
    setExperiment(newValue.value);
  };

  return (
    <>
      <Select options={experiments} onChange={handleExperimentChange} />
      {experiment === 'test1' && <Experiment keyboardType="KEY_PAD" title="Цифровая строка" />}
      {experiment === 'test2' && (
        <Experiment keyboardType="KEY_PAD" isRandom title="Цифровая строка (случайная)" />
      )}
      {experiment === 'test3' && <Experiment keyboardType="NUM_PAD" title="NumPad" />}
      {experiment === 'test4' && (
        <Experiment keyboardType="NUM_PAD" isRandom title="NumPad (случайная)" />
      )}
      {experiment === 'test5' && (
        <Experiment keyboardType="BOTH" isRandom title="Обе (случайные)" />
      )}
    </>
  );
}
