"use client";
import { useI18n } from "@/app/messages/client";
import TimePicker from "./TimePicker";
import style from "./timecard.module.css";
import { useContext, useEffect, useState } from "react";
import CommonBtnWrap from "../btn/CommonBtnWrap";
import { TimeContext } from "./TimeProvider";
import TimePickerInput from "./TimePickerInput";
interface Props {
  obj: {
    div: string;
    subDiv: string;
    startTime: string;
    endTime: string;
  };
  setDate: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
}

const TimePickerWrap = ({ obj, setDate, setOpen }: Props) => {
  const t = useI18n();
  const [startTime, setStartTime] = useState(`${obj.startTime}`);
  const [endTime, setEndTime] = useState(`${obj.endTime}`);
  const [inputStartTime, setInputStartTime] = useState(`${obj.startTime}`);
  const [inputEndTime, setInputEndTime] = useState(`${obj.endTime}`);
  const { value, setValue } = useContext(TimeContext);

  const onClose = () => {
    setValue({
      startTime: "0000",
      endTime: "0000",
      inputStartTime: "0000",
      inputEndTime: "0000",
      stop: false,
    });
  };

  const onSaved = () => {
    if (inputStartTime && inputEndTime) {
      setValue({
        startTime: inputStartTime,
        endTime: inputEndTime,
        inputStartTime,
        inputEndTime,
        stop: false,
      });
      setDate({ ...obj, startTime: inputStartTime, endTime: inputEndTime });
    }
  };

  const setInputST = (time: string) => {
    if (time.length > 3) {
      setInputStartTime(time);
      setValue({
        ...value,
        inputStartTime: time,
        inputEndTime,
      });
      console.log(inputStartTime);
      console.log(value);
    }
  };

  const setInputET = (time: string) => {
    if (time.length > 3) {
      setInputEndTime(time);
      setValue({
        ...value,
        inputStartTime,
        inputEndTime: time,
      });
      console.log(time);
    }
  };

  return (
    <>
      <div className={style.timePickerWrap}>
        <div className={style.timePickerTitleWrap}>
          <TimePickerInput
            obj={{
              title: `${t("timePicker.startTime")}`,
              time: inputStartTime,
              type: "start",
            }}
            setDate={setInputST}
          />
          <div className={style.timePickerTitleIcon}>~</div>
          <TimePickerInput
            obj={{
              title: `${t("timePicker.endTime")}`,
              time: inputEndTime,
              type: "end",
            }}
            setDate={setInputET}
          />
        </div>
        <div className={style.timePicker}>
          <TimePicker time={inputStartTime} setDate={setInputST} />
          <TimePicker time={inputEndTime} setDate={setInputET} />
        </div>
        <CommonBtnWrap setOpen={setOpen} onSave={onSaved} onClosed={onClose} />
      </div>
    </>
  );
};

export default TimePickerWrap;
