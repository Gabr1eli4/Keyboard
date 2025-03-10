import type { TKeyboardTypes } from '@/types/experiment';

import { generateDefiniteSequence, generateNumberSequence } from '@/utils';
import { sleep, waitForSpecificKey } from '@/utils/experiment';
import { useExperimentActions } from '@/store/experiment';
import { Keyboard } from '@/components/Keyboard';
import { Chart } from '@/components/Chart';

interface IExperimentProps {
  keyboardType: TKeyboardTypes;
  isRandom?: boolean;
  title: string;
}

const DEFINITE_VALUE = 5;

export function Experiment({ keyboardType, isRandom }: IExperimentProps) {
  const { setCurrentDigit, clearCurrentDigit, appendChartData, clearChartData } =
    useExperimentActions();

  async function handleDynamicSequence(sequence: Array<string>) {
    clearChartData();
    for (const [index, key] of sequence.entries()) {
      setCurrentDigit(key);
      const startTime = Date.now();
      const pressedKey = await waitForSpecificKey(key);
      const endTime = Date.now();
      const diffTime = endTime - startTime;
      const time = diffTime / (60 * 60);
      const spm = Math.round((index + 1) / time);
      const chartData = { name: (index + 1).toString(), time: spm };

      appendChartData(chartData);
      clearCurrentDigit();
      console.log(`Шаг ${index + 1}: Нажата ${pressedKey}`);
      await sleep(1000);
    }
    clearCurrentDigit();
    console.log('Все клавиши введены правильно!');
  }

  const handleStart = async () => {
    const _sequence = isRandom
      ? generateNumberSequence(keyboardType, 10)
      : generateDefiniteSequence(keyboardType, DEFINITE_VALUE);

    await handleDynamicSequence(_sequence);
  };

  return (
    <div>
      <h1>Keyboard (1)</h1>
      <Keyboard type={keyboardType} />
      <button onClick={handleStart}>Запустить</button>
      <Chart />
    </div>
  );
}
