"use client";
import React from "react";
import CardBtnStyle from "./CardBtnStyle";
import { useI18n } from "@/app/messages/client";
import style from "./btn.module.css";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  onSave?: () => void;
  onClosed?: () => void;
};

const CommonBtnWrap = ({ setOpen, onSave, onClosed }: Props) => {
  const t = useI18n();
  const btns = [
    {
      class: "cancel",
      text: t("deletedPopup.n"),
    },
    {
      class: "save",
      text: t("save"),
    },
  ];

  return (
    <div className={style.TimeBtnWrap}>
      {btns.map((btn, key) => (
        <CardBtnStyle
          opt={btn}
          key={key}
          setOpen={setOpen}
          onSave={onSave}
          onClosed={onClosed}
        />
      ))}
    </div>
  );
};

export default CommonBtnWrap;
