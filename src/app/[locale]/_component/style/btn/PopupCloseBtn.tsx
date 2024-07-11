"use client";
import React, { MouseEvent } from "react";
import CloseIcon from "../icon/CloseIcon";
import style from "./btn.module.css";

type Props = {
  onClose: () => void;
};

const PopupCloseBtn = ({ onClose }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };
  return (
    <button onClick={onClick} className={style.popupCloseBtn}>
      <CloseIcon />
    </button>
  );
};

export default PopupCloseBtn;
