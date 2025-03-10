// Функция ожидания конкретной клавиши
export function waitForSpecificKey(targetKey: string): Promise<string> {
  return new Promise((resolve) => {
    const handler = (event: KeyboardEvent) => {
      if (event.code === targetKey) {
        document.removeEventListener('keydown', handler);
        resolve(event.key);
      }
    };
    document.addEventListener('keydown', handler);
  });
}

export const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));
