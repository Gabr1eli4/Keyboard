import type { TChartData } from '@/types/experiment';

import { create } from 'zustand';

interface IExperimentStore {
  sequence: Array<string>;
  currentDigit?: string;
  chartData: Array<TChartData>;
  actions: {
    setCurrentDigit: (digit: string | undefined) => void;
    appendChartData: (chatData: TChartData) => void;
    setSequence: (sequence: Array<string>) => void;
    clearCurrentDigit: () => void;
    clearChartData: () => void;
  };
}

export const useExperimentStore = create<IExperimentStore>()((set, get) => ({
  currentDigit: undefined,
  chartData: [],
  sequence: [],
  actions: {
    setSequence: (sequence) => set({ sequence }),
    setCurrentDigit: (currentDigit) => set({ currentDigit }),
    clearCurrentDigit: () => set({ currentDigit: undefined }),
    appendChartData: (chartData) => set({ chartData: [...get().chartData, chartData] }),
    clearChartData: () => set({ chartData: [] }),
  },
}));

export const useExperimentActions = () => useExperimentStore((state) => state.actions);

export const useCurrentDigit = () => useExperimentStore((state) => state.currentDigit);
export const useChartData = () => useExperimentStore((state) => state.chartData);
export const useSequence = () => useExperimentStore((state) => state.sequence);
