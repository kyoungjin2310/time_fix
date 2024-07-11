"use client";
import React from "react";
import TimePickerWrap from "./TimePickerWrap";
import { motion, AnimatePresence } from "framer-motion";
type Props = {
  date: any;
  open: Boolean;
  setDate: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<any>>;
};
export default function TimePickerPopup({
  date,
  open,
  setDate,
  setOpen,
}: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={open ? date.div : null}
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          left: 0,
          top: 20,
          zIndex: 100,
          width: "100%",
        }}
      >
        <TimePickerWrap obj={date} setDate={setDate} setOpen={setOpen} />
      </motion.div>
    </AnimatePresence>
  );
}
