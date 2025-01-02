import { create } from "zustand";

const useStore = create((set) => ({
  places: [],
  addPlaces: (data) => set((state) => ({ places: [...state.places, data] })),
  setPlaces: (data) => set((state) => ({ places: [...data] })),

  chosenLocation: null,
  setChosenLocation: (data) => set((state) => ({ chosenLocation: data })),
}));

export default useStore;
