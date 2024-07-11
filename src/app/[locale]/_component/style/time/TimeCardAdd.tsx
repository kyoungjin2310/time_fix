import React, { useState } from "react";
import AddIcon from "../icon/AddIcon";
import { useI18n } from "@/app/messages/client";
import style from "./timecard.module.css";
import TimePickerForm from "./TimePickerForm";
import CommonBtnWrap from "../btn/CommonBtnWrap";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  timeCard?: any;
  noModify?: boolean;
};

const TimeCardAdd = ({ setOpen, timeCard, noModify }: Props) => {
  const t = useI18n();
  return (
    <div className={style.TimeCardAddWrap}>
      <h3 className={style.TimeCardAddTitle}>
        {timeCard && !noModify ? (
          <span className={style.TimeCardAddTxt}>{t("modify")}</span>
        ) : (
          <>
            <AddIcon />
            <span className={style.TimeCardAddTxt}>{t("newSchedule")}</span>
          </>
        )}
      </h3>
      <TimePickerForm setOpen={setOpen} timeCard={timeCard} />
      <CommonBtnWrap setOpen={setOpen} />
    </div>
  );
};

export default TimeCardAdd;
