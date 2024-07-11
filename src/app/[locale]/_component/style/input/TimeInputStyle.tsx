"use client";
import style from "@/app/[locale]/_component/style/input/input.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import TimePickerBtn from "../btn/TimePickerBtn";

interface Props {
  input: {
    title: string;
    id: string;
    type: string;
    placeholder: string;
    class?: string;
    icon?: string;
    readonly: boolean;
    value: string;
    open?: boolean;
  };
  onChangeValue?: React.Dispatch<React.SetStateAction<any>>;
}

const TimeInputStyle = ({ input, onChangeValue }: Props) => {
  const [value, setValue] = useState(input.value);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChangeValue) {
      onChangeValue({ ...input, value: e.target.value });
    }
  };
  useEffect(() => {
    setValue(input.value);
  }, [input]);
  return (
    <div className={[style[`${input.class}`], style.timeInputWrap].join(" ")}>
      <label className={style.timeInputLabel} htmlFor={input.id}>
        {input.title}
      </label>
      <input
        className={style.timeInputStyle}
        id={input.id}
        name={input.id}
        value={
          input.value && input.icon == "time"
            ? `${value.substring(0, 2)}:${value.substring(2, 4)}`
            : value
        }
        onChange={onChange}
        type={input.type}
        placeholder={input.placeholder}
        readOnly={input.readonly}
      />
      {input.icon == "time" && <TimePickerBtn open={input} />}
    </div>
  );
};

export default TimeInputStyle;
