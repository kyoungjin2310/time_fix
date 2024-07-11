"use client";

import { NextPage } from "next";
import Logo from "../../logo/Logo";
import { ThemeSwitcher } from "../btn/ThemeSwitcher";
import LangBtn from "../btn/LangBtn";
import BtnStyle from "../btn/BtnStyle";
import style from "./header.module.css";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useI18n } from "@/app/messages/client";
import { useRouter } from "next/navigation";

interface Props {}

const HeaderStyle: NextPage<Props> = ({}) => {
  const { theme, setTheme } = useTheme();
  const t = useI18n();
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };

  return (
    <header className={`${style.mainHeader} ${style[`${theme}`]}`}>
      <div className={style.headerWrap}>
        <Logo />
        <nav className={style.gnb}>
          <ul className={`${style.flex} ${style.left}`}>
            <li>
              <Link href="/home">Ti:Me</Link>
            </li>
            <li>
              <Link href="/guide">{t("userGuide")}</Link>
            </li>
          </ul>
          <ul className={`${style.flex} ${style.right}`}>
            <li>
              <Link href="/login">{t("login")}</Link>
            </li>
            <li className={style.signin}>
              <BtnStyle onEvent={onClick} opt={{ text: `${t("signIn")}` }} />
            </li>
            <li className={style.lang}>
              <LangBtn />
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderStyle;
