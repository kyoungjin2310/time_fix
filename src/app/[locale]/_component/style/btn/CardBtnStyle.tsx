"use client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

interface Props {
  opt?: {
    class?: string;
    text: string;
  };
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  onSave?: () => void;
  onClosed?: () => void;
}

const CardBtnStyle = ({ opt, setOpen, onSave, onClosed }: Props) => {
  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
    if (onClosed) {
      onClosed();
    }
  };

  const onSaved = (e: MouseEvent<HTMLButtonElement>) => {
    if (onSave) onSave();
    onClose(e);
  };

  return (
    <motion.button
      className={[style.CardBtnStyle, style[`${opt?.class}`]].join(" ")}
      onClick={opt?.class == "save" ? onSaved : onClose}
    >
      {opt?.text}
    </motion.button>
  );
};

export default CardBtnStyle;
