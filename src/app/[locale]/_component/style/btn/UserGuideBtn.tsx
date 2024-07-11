"use client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";
import { useI18n } from "@/app/messages/client";
import { MouseEvent } from "react";
import UserGuideIcon from "../icon/UserGuideIcon";
import { useRouter } from "next/navigation";

const UserGuideBtn = () => {
  const t = useI18n();
  const router = useRouter();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/guide");
  };
  return (
    <button className={style.userGuideBtn} onClick={(e) => onClick(e)}>
      <UserGuideIcon />
      <span className={style.userGuideBtnTxt}>{t("userGuide")}</span>
    </button>
  );
};

export default UserGuideBtn;
