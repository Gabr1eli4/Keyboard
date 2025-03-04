import { create } from 'zustand';

interface IExperimentStore {
  sequence: Array<string>;
  currentDigit?: string;
  actions: {
    setCurrentDigit: (digit: string | undefined) => void;
    setSequence: (sequence: Array<string>) => void;
    clearCurrentDigit: () => void;
  };
}

export const useExperimentStore = create<IExperimentStore>()((set) => ({
  currentDigit: undefined,
  sequence: [],
  actions: {
    setSequence: (sequence) => set({ sequence }),
    setCurrentDigit: (currentDigit) => set({ currentDigit }),
    clearCurrentDigit: () => set({ currentDigit: undefined }),
  },
}));

export const useExperimentActions = () => useExperimentStore((state) => state.actions);

export const useCurrentDigit = () => useExperimentStore((state) => state.currentDigit);
export const useSequence = () => useExperimentStore((state) => state.sequence);
