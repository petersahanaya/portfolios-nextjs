import { create } from "zustand";

export type Option = {
  label: string;
  value: string;
};

const listOfOption: Option[] = [
  {
    label: "home",
    value: "home",
  },
  {
    label: "work",
    value: "work",
  },
  {
    label: "resume",
    value: "resume",
  },
  {
    label: "contact",
    value: "contact",
  },
];

type State = {
  listOfOption: Option[];
  selected: number;
  onPressedChangeSelected: (idx: number) => void;
};

export const useSelectedOptionHeader = create<State>((set) => ({
  listOfOption,
  selected: 0,
  onPressedChangeSelected(idx) {
    return set(() => ({ selected: idx }));
  },
}));
