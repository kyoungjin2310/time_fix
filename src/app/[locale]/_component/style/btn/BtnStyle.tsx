"use client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";

import { motion } from "framer-motion";
import { MouseEvent, ReactElement } from "react";
interface Props {
  opt?: {
    class?: string;
    text: string;
  };
  onEvent?: () => void;
  children?: ReactElement;
}

const BtnStyle = ({ children, opt, onEvent }: Props) => {
  const onClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onEvent) onEvent();
  };
  return (
    <motion.button
      className={`${style.btn} ${opt?.class}`}
      onClick={(e) => onClickEvent(e)}
    >
      {children ? children : opt?.text}
    </motion.button>
  );
};

export default BtnStyle;
