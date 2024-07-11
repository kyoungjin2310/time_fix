import { useContext, useEffect, useState } from "react";
import TimePickerItem from "./TimePickerItem";
import style from "./timecard.module.css";
import { TimeContext } from "./TimeProvider";
interface Props {
  time: string;
  setDate: React.Dispatch<React.SetStateAction<any>>;
}

let hoursN = 24;
let hours = [...Array(hoursN)].map((x, i) => (i < 10 ? "0" + i : i));
let minutesN = 60;
let minutes = [...Array(minutesN)].map((x, i) => (i < 10 ? "0" + i : i));

const TimePicker = ({ time, setDate }: Props) => {
  const [hour, sethour] = useState(String(time).substring(0, 2));
  const [minute, setMinute] = useState(String(time).substring(2, 4));
  const { value, setValue } = useContext(TimeContext);

  const [timeSelect, setTimeSelect] = useState({
    hoursT: hours.filter(
      (n, idx) => String(n) == String(time).substring(0, 2) && idx,
    )[0],
    minutesT: minutes.filter(
      (n, idx) => String(n) == String(time).substring(2, 4) && idx,
    )[0],
  });

  const { hoursT, minutesT } = timeSelect;
  useEffect(() => {
    setDate(`${hour}${minute}`);
  }, [hour, minute]);

  useEffect(() => {
    setTimeSelect({
      hoursT: hours.filter(
        (n, idx) => String(n) == String(time).substring(0, 2) && idx,
      )[0],
      minutesT: minutes.filter(
        (n, idx) => String(n) == String(time).substring(2, 4) && idx,
      )[0],
    });
  }, [time]);

  return (
    <div className={style.wrap}>
      <TimePickerItem
        itemArr={hours}
        keyName="hoursT"
        index={timeSelect.hoursT ? Number(timeSelect.hoursT) : 0}
        setDate={sethour}
      />
      <span className={style.wrapIcon}>:</span>
      <TimePickerItem
        itemArr={minutes}
        keyName="minutesT"
        index={timeSelect.minutesT ? Number(timeSelect.minutesT) : 0}
        setDate={setMinute}
      />
    </div>
  );
};

export default TimePicker;
