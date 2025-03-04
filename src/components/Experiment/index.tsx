import type { TKeyboardTypes } from '@/types/experiment';

import { generateDefiniteSequence, generateNumberSequence } from '@/utils';
import { sleep, waitForSpecificKey } from '@/utils/experiment';
import { useExperimentActions } from '@/store/experiment';
import { Keyboard } from '@/components/Keyboard';
import { Chart } from '@/components/Chart';

interface IExperimentProps {
  keyboardType: TKeyboardTypes;
  isRandom?: boolean;
}

const DEFINITE_VALUE = 5;

export function Experiment({ keyboardType, isRandom }: IExperimentProps) {
  const { setCurrentDigit, clearCurrentDigit, appendChartData, clearChartData } =
    useExperimentActions();

  async function handleDynamicSequence(sequence: Array<string>) {
    clearChartData();
    for (const [index, key] of sequence.entries()) {
      setCurrentDigit(key);
      const startTime = new Date();
      const pressedKey = (await waitForSpecificKey(key)) as string;
      const endTime = new Date();
      const diffTime = endTime.getTime() - startTime.getTime();
      const chartData = { name: (index + 1).toString(), time: diffTime };

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
      ? generateNumberSequence(10)
      : generateDefiniteSequence(DEFINITE_VALUE);

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
