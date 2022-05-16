import { createContext, useState } from "react";
import { IToggle } from "./@types/toggle";

const defaultState = {
  isToggled: false,
  setIsToggled: () => {
    !defaultState.isToggled;
    console.log(defaultState.isToggled);
  },
};

export const ToggleContext = createContext<IToggle | null>(defaultState);

export const ToggleProvider = (props: any) => {
  return (
    <ToggleContext.Provider
      value={{
        isToggled: defaultState.isToggled,
        setIsToggled: defaultState.setIsToggled,
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};
