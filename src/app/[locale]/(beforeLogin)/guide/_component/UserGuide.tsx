"use client";
import style from "./userguide.module.css";

import { useI18n } from "@/app/messages/client";
import UserGuideTitleIcon from "./UserGuideTitleIcon";
import UserGuideTxtIcon from "./UserGuideTxtIcon";

const UserGuide = () => {
  const t = useI18n();
  const arr = Array.from({ length: 4 }, (v, i) => i + 1);
  return (
    <div className={style.guideWrap}>
      <div className={style.guideTitleWrap}>
        <UserGuideTitleIcon />
        <h2 className={style.guideTitle}>{t("guide.title")}</h2>
      </div>
      <div className={style.guideContentWrap}>
        {/* guide1 */}
        <div className={style.guide1Wrap}>
          <h3
            className={style.guide1Title}
            dangerouslySetInnerHTML={{ __html: t("guide.guide1.title") }}
          ></h3>
          <div className={style.guideContent}>
            <div className={style.guide1Icon}>
              <UserGuideTxtIcon />
            </div>
            <div className={style.guideContentTitle}>
              {t("guide.guide1.text1")}
            </div>
            <div className={style.guideContentTxt}>
              {t("guide.guide1.text2")}
            </div>
          </div>
        </div>
        {/* guide2 */}
        <div className={style.guide2Wrap}>
          <h3 className={style.guide2Title}>{t("guide.guide2.title")}</h3>
          <div className={style.guide2ContentWrap}>
            <div className={style.guide2Content}>
              <h4 className={style.guide2ContentTitle}>
                {t("guide.guide2.text1")}
              </h4>
              <p className={style.guide2ContentPic}>
                {t("guide.guide2.text3")}
              </p>
              <p className={style.guide2ContentShortcut}>
                {t("guide.guide2.text4")}
              </p>
            </div>
            <div className={style.guide2Content}>
              <h4
                className={[
                  style.guide2ContentTitle,
                  style.guide2ContentTitleOther,
                ].join(" ")}
              >
                {t("guide.guide2.text2")}
              </h4>
              <p className={style.guide2ContentPic}>
                {t("guide.guide2.text3")}
              </p>
              <p className={style.guide2ContentShortcut_}>
                {t("guide.guide2.text4")}
              </p>
            </div>
          </div>
        </div>
        {/* guide3 */}
        <div className={style.guide3Wrap}>
          <h3 className={style.guide3Title}>{t("guide.guide3.title")}</h3>
          <p className={style.guide3Txt}>{t("guide.guide3.text1")}</p>
          <div className={style.guide3Content}>
            <ul className={style.guide3ContentList}>
              {arr.map((n, i) => {
                return (
                  <li key={i} className={style.guide3List}>
                    <p className={style.guide3Day}>{`${n}`}day</p>
                    <p className={style.guide3Icon}>
                      <UserGuideTxtIcon />
                    </p>
                    <p className={style.guide3ListTitle}>
                      2023112{`${n + 2}`}.txt
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.guide3_1Content}>
            <h4
              className={style.guide3_1Title}
              dangerouslySetInnerHTML={{ __html: t("guide.guide3.text2") }}
            ></h4>
            <div className={style.guide3_1ExplanWrap}>
              <p className={style.guide3_1ExplanEm}>
                <span className={style.guide3_1Exp1}>05:20</span>,
                <span className={style.guide3_1Exp2}>personal</span>,
                <span className={style.guide3_1Exp3}>meditation</span>
              </p>
              <p className={style.guide3_1ExplanTxt}>
                {t("guide.guide3.text3")}
              </p>
            </div>
          </div>
          <div className={style.guide3_2Content}>
            <h4 className={style.guide3_2Title}>{t("guide.guide3.text4")}</h4>
            <div className={style.guide3_2ExplanWrap}>
              <p className={style.guide3_2ExplanEm}>
                <span className={style.guide3_2Exp1}>05:20</span>,
                <span className={style.guide3_2Exp2}>personal</span>,
                <span className={style.guide3_2Exp3}>meditation</span>,
                <span className={style.guide3_2Exp4}>have a good day</span>
              </p>
              <p className={style.guide3_2ExplanTxt}>
                {t("guide.guide3.text3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
