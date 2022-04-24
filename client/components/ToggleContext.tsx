import { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = (props: any) => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <ToggleContext.Provider value={[isToggled, setIsToggled]}>
      {props.children}
    </ToggleContext.Provider>
  );
};
