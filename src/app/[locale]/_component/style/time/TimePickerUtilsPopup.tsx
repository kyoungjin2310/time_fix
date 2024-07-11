"use client";
import React, { MouseEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./timecard.module.css";
import { useI18n } from "@/app/messages/client";
import ModifyIcon from "../icon/ModifyIcon";
import DeletedIcon from "../icon/DeletedIcon";
type Props = {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  onModify: () => void;
};
export default function TimePickerUtilsPopup({
  open,
  setOpen,
  onModify,
}: Props) {
  const t = useI18n();
  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  };
  const onChanged = (e: MouseEvent<HTMLButtonElement>) => {
    onModify();
    onClose(e);
  };
  const onDeleted = (e: MouseEvent<HTMLButtonElement>) => {
    if (!confirm(t("deletedPopup.title"))) {
      alert(t("deletedPopup.n"));
    } else {
      alert(t("deletedPopup.y"));
    }
    onClose(e);
  };

  const onOtherClosed = () => {
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", onOtherClosed);
    return () => {
      document.body.removeEventListener("click", onOtherClosed);
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={open ? "open" : null}
        initial={{ y: 10, opacity: 0, visibility: "hidden" }}
        animate={{
          y: 0,
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
        exit={{ y: -10, opacity: 0, visibility: "hidden" }}
        transition={{ duration: 0.25 }}
        style={{ position: "absolute", right: -36, top: 8 }}
      >
        <ul className={style.TimeUtilsList}>
          <li className={style.TimeUtilsItem}>
            <button onClick={onChanged}>
              <ModifyIcon />
              <span className={style.TimeTxt}>{t("timePopupMenu1")}</span>
            </button>
          </li>
          <li className={[style.TimeUtilsItem, style.delete].join(" ")}>
            <button onClick={onDeleted}>
              <DeletedIcon />
              <span className={style.TimeTxt}>{t("timePopupMenu2")}</span>
            </button>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
