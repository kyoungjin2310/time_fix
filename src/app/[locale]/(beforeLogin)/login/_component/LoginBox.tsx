"use client";
import { useI18n } from "@/app/messages/client";
import style from "../login.module.css";
import Logo from "@/app/[locale]/_component/logo/Logo";
import BtnStyle from "@/app/[locale]/_component/style/btn/BtnStyle";
import GoogleLoginIcon from "@/app/[locale]/_component/style/icon/GoogleLoginIcon";
import { useState, useRef, ChangeEvent } from "react";

const LoginBox = ({}) => {
  const t = useI18n();
  const [agree, setAgree] = useState<boolean>(false);
  const check = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (agree) {
      window.open(`${process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL}`);
    } else {
      alert(t("agree"));
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
  };
  return (
    <div className={style.loginBox}>
      <div className={style.loginLogo}>
        <Logo type="login" />
      </div>
      <p className={style.loginExplanTxt}>{t("loginPage.title")}</p>
      <div className={style.loginBtnWrap}>
        <div className={style.inputCheckBoxWrap}>
          <input
            className={style.inputCheckBox}
            type="checkbox"
            name="loginAgree"
            id="loginAgree"
            ref={check}
            onChange={onChange}
          />
          <label
            htmlFor="loginAgree"
            dangerouslySetInnerHTML={{ __html: t("loginPage.explanTxt") }}
            className={style.inputCheckBoxTitle}
          />
        </div>
        <BtnStyle onEvent={onClick}>
          <span className={style.btnWrap}>
            <GoogleLoginIcon />
            <span className={style.btnTxt}>{t("loginPage.btnTxt")}</span>
          </span>
        </BtnStyle>
      </div>
    </div>
  );
};

export default LoginBox;
