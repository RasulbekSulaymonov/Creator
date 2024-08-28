import { create } from "zustand";

export interface Constants {
  template: string;
  colorScheme: string;
  font: string;
  color: string;
}

const INITIAL_VALUE: Constants = {
  template: "Rounded Corners Form",
  colorScheme: "Light",
  font: "Fixel Display",
  color: "#69b6fa",
};

interface State {
  pages: Constants;
}

interface Actions {
  setPages: (fn: (prev: Constants) => Constants) => void;
}

const usePageStore = create<State & Actions>((set) => ({
  pages: INITIAL_VALUE,
  setPages: (fn) => set((state) => ({ pages: fn(state.pages) })),
}));

const setPagesStore = (state: Actions) => state.setPages;

export { usePageStore, setPagesStore };
