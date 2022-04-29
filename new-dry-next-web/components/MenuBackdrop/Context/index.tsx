import React, { createContext, useState } from "react";

interface BackdropContextType {
  isOpen: boolean;
  setIsOpen: Function;
}

const INITIAL_VALUES = {
  isOpen: false,
  setIsOpen: () => {},
};

export const BackdropContext =
  createContext<BackdropContextType>(INITIAL_VALUES);

export const BackdropProvider: React.ComponentType<{children: React.ReactNode;}> = ({ children }) => {
  const { Provider } = BackdropContext;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </Provider>
  );
};
