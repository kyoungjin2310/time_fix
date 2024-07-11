"use client";
import { useI18n } from "@/app/messages/client";
import React, { useCallback } from "react";
import FileDownLoadIcon from "../icon/FileDownLoadIcon";
import style from "./btn.module.css";

const FileDownLoad = () => {
  const t = useI18n();
  const exportTxt = useCallback(() => {
    let fileName = "Sample file Download.txt";
    let output = "Sample file Download";
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  }, []);
  return (
    <button className={style.fileDownLoad} onClick={() => exportTxt()}>
      <FileDownLoadIcon />
      <span className={style.fileDownLoadTxt}>{t("fileDownLoad")}</span>
    </button>
  );
};

export default FileDownLoad;
