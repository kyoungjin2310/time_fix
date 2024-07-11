"use client";
import style from "@/app/_component/style/input/input.module.css";
import { ChangeEvent, useState } from "react";

interface Props {
  input: {
    title: string;
    id: string;
    type: string;
    placeholder: string;
    style?: string;
  };
  onChangeValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputStyle = ({ input, onChangeValue }: Props) => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeValue(e.target.value);
  };
  return (
    <div>
      <label htmlFor={input.id}>{input.title}</label>
      <input
        id={input.id}
        name={input.id}
        className={input.style}
        value={value}
        onChange={onChange}
        type={input.type}
        placeholder={input.placeholder}
      />
    </div>
  );
};

export default InputStyle;
