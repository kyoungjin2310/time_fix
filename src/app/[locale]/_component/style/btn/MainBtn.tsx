"use client";
import { useI18n } from "@/app/messages/client";
import style from "@/app/[locale]/_component/style/btn/btn.module.css";
import { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { TabLink, TabNavLink } from "@/app/model/btn";
const MainBtn = () => {
  const [active, setActive] = useState<number | null>(1);
  const t = useI18n();
  const [dataTabs, setDataTabs] = useState<TabLink>([
    {
      id: 1,
      tabTitle: t("mainBtn1"),
      tabClass: "mainBtn",
      tabClicked: false,
    },
    {
      id: 2,
      tabTitle: t("mainBtn2"),
      tabClass: "mainBtn",
      tabClicked: false,
    },
  ]);

  const cardVariant = {
    active: {
      opacity: 1,
      backgroundColor: "var(--main-btn-bg-active)",
      color: "var(--main-btn-font-color-active)",
      transition: {
        duration: 0.25,
      },
    },
    inactive: {
      opacity: 1,
      backgroundColor: "none",
      color: "var(--main-btn-font-color)",
      transition: {
        duration: 0.25,
      },
    },
  };

  const NavLink = ({ id, tabTitle, isActive, onClick }: TabNavLink) => {
    return (
      <motion.button
        onClick={(e) => navigate(e, id)}
        variants={cardVariant}
        animate={isActive ? "active" : "inactive"}
        initial="inactive"
      >
        {tabTitle}
      </motion.button>
    );
  };

  const navigate = (e: MouseEvent<HTMLButtonElement>, id: number | null) => {
    e?.preventDefault();
    setActive(id);
  };

  return (
    <div className={style.mainBtn}>
      {dataTabs.map((item) => (
        <li key={item.id}>
          <NavLink {...item} isActive={active === item.id} onClick={navigate} />
        </li>
      ))}
    </div>
  );
};

export default MainBtn;
