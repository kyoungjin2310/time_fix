import React, { createContext, ReactNode, useState } from "react";

interface Item {
  startTime: string;
  endTime: string;
  inputStartTime: string;
  inputEndTime: string;
  stop: boolean;
}
export interface TimeContextType {
  value: Item;
  setValue: (value: Item) => void;
}

interface ModalType {
  children: ReactNode;
}
const TimeContext = createContext<TimeContextType>({
  value: {
    startTime: "",
    endTime: "",
    inputStartTime: "0000",
    inputEndTime: "0000",
    stop: false,
  },
  setValue: (value: Item) => {},
});

const TimeProvider = ({ children }: ModalType) => {
  const [value, setValue] = useState({
    startTime: "",
    endTime: "",
    inputStartTime: "0000",
    inputEndTime: "0000",
    stop: false,
  });

  return (
    <TimeContext.Provider value={{ value, setValue }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeProvider };
