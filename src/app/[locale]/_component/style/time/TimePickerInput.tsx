"use client";
import { useI18n } from "@/app/messages/client";
import style from "./timecard.module.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { TimeContext } from "./TimeProvider";
interface Props {
  obj: {
    title: string;
    time: string;
    type: string;
  };
  setDate: React.Dispatch<React.SetStateAction<any>>;
}

const TimePickerInput = ({ obj, setDate }: Props) => {
  const t = useI18n();
  const { value, setValue } = useContext(TimeContext);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const inputValue = e.target.value;
    if (type == "start") {
      if (inputValue.length == 0) {
        setStartTime(inputValue);
      } else if (
        parseInt(inputValue, 10) >= 0 &&
        parseInt(inputValue, 10) <= 23
      ) {
        setStartTime(inputValue);
      }
    } else {
      if (inputValue.length == 0) {
        setEndTime(inputValue);
      } else if (
        parseInt(inputValue, 10) >= 0 &&
        parseInt(inputValue, 10) <= 59
      ) {
        setEndTime(inputValue);
      }
    }
  };

  const onFocusout = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const inputValue = e.target.value;
    if (e.target.value) {
      if (type == "start") {
        if (inputValue.length == 1) {
          setStartTime(`0${inputValue}`);
          setDate(`0${inputValue}${endTime}`);
        } else if (inputValue.length == 2) {
          setStartTime(`${inputValue}${endTime}`);
          setDate(`${inputValue}${endTime}`);
        }
      } else {
        if (inputValue.length == 1) {
          setEndTime(`0${inputValue}`);
          setDate(`${startTime}0${inputValue}`);
        } else if (inputValue.length == 2) {
          setEndTime(inputValue);
          setDate(`${startTime}${inputValue}`);
        }
      }
      setValue({
        ...value,
        stop: true,
      });
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (event.key === "Enter") {
      if (type == "start") {
        if (startTime.length == 1) {
          setStartTime(`0${startTime}`);
          setDate(`0${startTime}${endTime}`);
        } else if (startTime.length == 2) {
          setStartTime(`${startTime}${endTime}`);
          setDate(`${startTime}${endTime}`);
        }
      } else {
        if (endTime.length == 1) {
          setEndTime(`0${endTime}`);
          setDate(`${startTime}0${endTime}`);
        } else if (endTime.length == 2) {
          setEndTime(endTime);
          setDate(`${startTime}${endTime}`);
        }
      }
      setValue({
        ...value,
        stop: true,
      });
    }
  };
  useEffect(() => {
    setStartTime(obj.time.substring(0, 2));
    setEndTime(obj.time.substring(2, 4));
  }, [obj]);

  return (
    <>
      <div className={style.timePickerTitle}>
        <strong className={style.timePickerTxt}>{obj.title}</strong>
        <span className={style.times}>
          <input
            className={style.timesItem}
            type="text"
            onChange={(e) => onChange(e, "start")}
            value={startTime}
            onKeyDown={(e) => handleKeyDown(e, "start")}
            onBlur={(e) => onFocusout(e, "start")}
          />
          <i className={style.timesIcon}>:</i>
          <input
            className={style.timesItem}
            type="text"
            onChange={(e) => onChange(e, "end")}
            value={endTime}
            onKeyDown={(e) => handleKeyDown(e, "end")}
            onBlur={(e) => onFocusout(e, "end")}
          />
        </span>
      </div>
    </>
  );
};

export default TimePickerInput;
