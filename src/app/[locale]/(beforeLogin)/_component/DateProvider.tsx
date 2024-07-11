import React, { createContext, ReactNode, useState } from "react";

export interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

interface ModalType {
  children: ReactNode;
}
const MyContext = createContext<MyContextType>({
  value: `${new Date()}`,
  setValue: (value: string) => {},
});

const DateProvider = ({ children }: ModalType) => {
  const [value, setValue] = useState(`${new Date()}`);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, DateProvider };
