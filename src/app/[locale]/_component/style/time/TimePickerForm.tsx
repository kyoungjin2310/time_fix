"use client";
import React, { useContext, useEffect, useState } from "react";
import TimeInputStyle from "../input/TimeInputStyle";
import style from "./timecard.module.css";
import TimePickerPopup from "./TimePickerPopup";
import {
  TimeContext,
  TimeProvider,
} from "@/app/[locale]/_component/style/time/TimeProvider";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  timeCard: any;
};

const TimePickerForm = ({ setOpen, timeCard }: Props) => {
  const { value, setValue } = useContext(TimeContext);

  const [division, setDivision] = useState({
    title: "Division",
    id: "Division",
    type: "text",
    placeholder: "",
    class: "default",
    icon: "default",
    readonly: false,
    value: timeCard ? timeCard.div : "",
    open: false,
  });

  const [subdivision, setSubdivision] = useState({
    title: "Subdivision",
    id: "Subdivision",
    type: "text",
    placeholder: "",
    class: "default",
    icon: "default",
    readonly: false,
    value: timeCard ? timeCard.subDiv : "",
    open: false,
  });
  const [date, setDate] = useState({
    div: "ss",
    subDiv: "ss",
    startTime: timeCard
      ? timeCard.startTime
      : value.startTime
      ? value.startTime
      : "",
    endTime: timeCard ? timeCard.endTime : value.endTime ? value.endTime : "",
  });

  const [startTime, setStartTime] = useState({
    title: "Time",
    id: "setStartTime",
    type: "text",
    placeholder: "",
    class: "time",
    icon: "time",
    readonly: true,
    value: value.inputStartTime,
    open: false,
  });

  const [endTime, setEndTime] = useState({
    title: "  ",
    id: "setStartTime",
    type: "text",
    placeholder: "",
    class: "time",
    icon: "time",
    readonly: true,
    value: value.inputEndTime,
    open: false,
  });

  useEffect(() => {
    // setStartTime({ ...startTime, value: date.startTime });
    // setEndTime({ ...endTime, value: date.endTime });
    console.log(timeCard);
  }, []);

  useEffect(() => {
    setStartTime({ ...startTime, value: date.startTime });
    setEndTime({ ...endTime, value: date.endTime });
    console.log(value);
  }, [date]);

  const [timeOpen, setTimeOpen] = useState(false);

  const onClick = () => {
    setTimeOpen(true);
  };

  return (
    <form className={style.timePickerFormWrap}>
      <fieldset>
        <legend className="h">Time</legend>
        <div className={style.timePickerForm}>
          <TimeInputStyle input={division} onChangeValue={setDivision} />
          <span className={style.timePickerFormIcon}>&gt;</span>
          <TimeInputStyle input={subdivision} onChangeValue={setSubdivision} />
        </div>
        <div className={style.timePickerForm}>
          <TimeProvider>
            <div className={style.timePickerFormDf} onClick={onClick}>
              <TimeInputStyle input={startTime} />
              <span className={style.timePickerFormIcon}>~</span>
              <TimeInputStyle input={endTime} />
            </div>
            <TimePickerPopup
              open={timeOpen}
              date={date}
              setDate={setDate}
              setOpen={setTimeOpen}
            />
          </TimeProvider>
        </div>
        <TimeInputStyle input={subdivision} onChangeValue={setSubdivision} />
      </fieldset>
    </form>
  );
};

export default TimePickerForm;
