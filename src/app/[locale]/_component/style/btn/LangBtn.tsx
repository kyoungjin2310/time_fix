"use client";
import { useState } from "react";
import LangIcon from "./icon/LangIcon";
import { useChangeLocale, useCurrentLocale } from "@/app/messages/client";
import { lang } from "@/app/utils/common";
import style from "./btn.module.css";
const LangBtn = ({}) => {
  const [show, setShow] = useState(false);
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const onShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  const onLangChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    lang: LangType
  ) => {
    e.preventDefault();
    changeLocale(`${lang}`);
  };

  return (
    <>
      <button onClick={onShow}>
        <LangIcon />
      </button>
      {show && (
        <div className={style.langWrap}>
          <ul>
            {lang.map((l: LangArrList, key: number) => (
              <li key={key}>
                <button onClick={(e) => onLangChange(e, l.lang)}>
                  {l.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LangBtn;
