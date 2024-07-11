"use client";
import { useI18n } from "@/app/messages/client";
import React from "react";
import style from "./nodata.module.css";
import FileNoDataIcon from "../icon/FileNoDataIcon";
const InputFileNoData = () => {
  const t = useI18n();
  return (
    <div className={style.InputFileNoData}>
      <FileNoDataIcon />
      <h6 className={style.InputFileNoDataTitle}>{t("fileNodata.title")}</h6>
      <p className={style.InputFileNoDataTxt}>{t("fileNodata.txt")}</p>
    </div>
  );
};

export default InputFileNoData;
