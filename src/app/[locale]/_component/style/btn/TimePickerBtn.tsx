import React, { MouseEvent } from "react";
import TimePickerIcon from "../icon/TimePickerIcon";
import style from "./btn.module.css";
type Props = {
  open: any;
};
const TimePickerBtn = ({ open }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    // alert(open);
    e.preventDefault();
    // setOpen({ ...open, open: !open });
  };

  return (
    <button className={style.timePickerBtn} onClick={onClick}>
      <TimePickerIcon />
    </button>
  );
};

export default TimePickerBtn;
