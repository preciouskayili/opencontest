// @types.toggle.ts

export interface IToggle {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}
