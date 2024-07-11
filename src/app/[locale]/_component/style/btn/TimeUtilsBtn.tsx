"use client";

import { MouseEvent } from "react";
import style from "./btn.module.css";

type Props = {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

const TimeUtilsBtn = ({ open, setOpen }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <button onClick={onClick} className={style.timeUtilsBtn}>
      <svg width="2" height="13" viewBox="0 0 2 13" fill="none">
        <circle
          cx="1.00024"
          cy="1.16663"
          r="1"
          fill="var(--time-card-utils-btn)"
        />
        <circle
          cx="1.00024"
          cy="6.1665"
          r="1"
          fill="var(--time-card-utils-btn)"
        />
        <circle
          cx="1.00024"
          cy="11.1665"
          r="1"
          fill="var(--time-card-utils-btn)"
        />
      </svg>
    </button>
  );
};

export default TimeUtilsBtn;
