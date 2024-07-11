import { useI18n } from "@/app/messages/client";
import React, { MouseEvent } from "react";
import style from "./btn.module.css";
import FileUpLoadIcon from "../icon/FileUpLoadIcon";

type Props = {
  open: () => void;
};
const FileUpLoadBtn = ({ open }: Props) => {
  const t = useI18n();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    open();
  };
  return (
    <button onClick={onClick} className={style.fileUpload}>
      <FileUpLoadIcon />
      <span className={style.fileUploadTxt}>{t("fileUpload")}</span>
    </button>
  );
};

export default FileUpLoadBtn;
