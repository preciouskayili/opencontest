import { createContext, useState } from "react";
import { IToggle } from "./@types/toggle";

const defaultState = {
  isToggled: false,
  setIsToggled: null,
};

export const ToggleContext = createContext<IToggle>(defaultState);

export const ToggleProvider = (props: any) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <ToggleContext.Provider
      value={{
        isToggled: isToggled,
        setIsToggled: setIsToggled,
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};
