import { create } from "zustand";

export const useStore = create((set) => ({
  // Step state
  currentStep: 1,
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  // Selected input
  hashSelect: false,
  setHashSelect: (hashSelect) => set({ hashSelect }),
  // State Rapat
  isStatus: "Baru",
  setIsStatus: (isStatus) => set({ isStatus }),
}));
