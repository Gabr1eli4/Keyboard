import { useExperimentStore } from '@/store/experiment';

// Функция ожидания конкретной клавиши
export function waitForSpecificKey(targetKey: string) {
  return new Promise((resolve) => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        document.removeEventListener('keydown', handler);
        resolve(event.key);
      }
    };
    document.addEventListener('keydown', handler);
  });
}

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

export async function handleDynamicSequence(sequence: Array<string>) {
  const { setCurrentDigit, clearCurrentDigit } = useExperimentStore.getState().actions;
  for (const [index, key] of sequence.entries()) {
    setCurrentDigit(key);
    const startTime = new Date();
    const pressedKey = await waitForSpecificKey(key);
    const endTime = new Date();
    const diffTime = endTime.getTime() - startTime.getTime();
    console.log('diffTime ', diffTime);
    clearCurrentDigit();
    console.log(`Шаг ${index + 1}: Нажата ${pressedKey}`);
    await sleep(1000);
  }
  clearCurrentDigit();
  console.log('Все клавиши введены правильно!');
}
