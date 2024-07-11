"use client";
import React, { useState } from "react";
import style from "./timewrap.module.css";
import TimeUtilsBtn from "../../_component/style/btn/TimeUtilsBtn";
import TimePickerUtilsPopup from "../../_component/style/time/TimePickerUtilsPopup";
import TimeCard from "../../_component/style/time/TimeCard";
import TimeCardAdd from "../../_component/style/time/TimeCardAdd";
type Props = {
  date: any;
};
export default function TimeWrap({ date }: Props) {
  const [open, setOpen] = useState<Boolean>(false);
  const [modify, setModify] = useState<Boolean>(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!modify ? (
        <div className={style.timeCardwrap}>
          <TimeCard date={date} />
          <TimeUtilsBtn open={open} setOpen={setOpen} />
          <TimePickerUtilsPopup
            open={open}
            setOpen={setOpen}
            onModify={() => setModify(true)}
          />
        </div>
      ) : (
        <TimeCardAdd setOpen={setModify} timeCard={date} />
      )}
    </>
  );
}
