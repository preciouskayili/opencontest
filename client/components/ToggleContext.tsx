import { createContext, useState } from "react";
import { IToggle } from "./@types/toggle";

const defaultState = {
  isToggled: true,
};

export const ToggleContext = createContext<IToggle | null>(defaultState);

export const ToggleProvider = (props: any) => {
  const [isToggled, setIsToggled] = useState(defaultState.isToggled);
  const toggle = (): void => {
    setIsToggled(!isToggled);
  };
  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {props.children}
    </ToggleContext.Provider>
  );
};
