"use client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";

import { motion } from "framer-motion";
import AddIcon from "../icon/AddIcon";
import TimeCardAdd from "../time/TimeCardAdd";
import { useState } from "react";
interface Props {
  text: string;
  startTime: string;
  endTime: string;
}

const AddTimeBtn = ({ text, startTime, endTime }: Props) => {
  const [open, setOpen] = useState<Boolean>(false);
  const timeCard = {
    startTime,
    endTime,
  };
  return (
    <>
      {!open && (
        <motion.button className={style.addTime} onClick={() => setOpen(!open)}>
          <AddIcon />
          <span className={style.addTimeTxt}>{text}</span>
        </motion.button>
      )}
      {open && (
        <TimeCardAdd setOpen={setOpen} timeCard={timeCard} noModify={true} />
      )}
    </>
  );
};

export default AddTimeBtn;
