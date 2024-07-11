"use client";
import { useI18n } from "@/app/messages/client";
import AddIcon from "../icon/AddIcon";
import style from "./btn.module.css";
import { MouseEvent } from "react";
import TimeCardAdd from "../time/TimeCardAdd";

type Props = {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

const NewTimeBtn = ({ open, setOpen }: Props) => {
  const t = useI18n();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <button className={style.NewSchedule} onClick={onClick}>
          <AddIcon />
          <span className={style.NewScheduleTxt}>{t("newSchedule")}</span>
        </button>
      ) : (
        <TimeCardAdd setOpen={setOpen} />
      )}
    </>
  );
};

export default NewTimeBtn;
