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

export async function handleDynamicSequence(sequence: Array<string>) {
  for (const [index, key] of sequence.entries()) {
    const pressedKey = await waitForSpecificKey(key);
    console.log(`Шаг ${index + 1}: Нажата ${pressedKey}`);
    // Добавьте свою логику обработки здесь
  }
  console.log('Все клавиши введены правильно!');
}
