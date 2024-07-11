"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import { DateProvider } from "./DateProvider";
import TimeContentWrap from "./TimeContentWrap";
import UserGuideBtn from "../../_component/style/btn/UserGuideBtn";
import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/app/api/schedule";
import dayjs from "dayjs";
import { queryString } from "@/app/utils/common";

const Main = () => {
  const date = queryString({ date: dayjs().format("YYYY-MM") });
  const { data, error } = useQuery({
    queryKey: ["date", date],
    queryFn: async () => await getSchedule(date),
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <div className={style.mainContainer}>
      <MainBtn />
      <div className={style.UserGuideBtnWrap}>
        <UserGuideBtn />
      </div>
      <div className={style.df}>
        <DateProvider>
          <>
            <Datepicker />
            <TimeContentWrap />
          </>
        </DateProvider>
      </div>
    </div>
  );
};

export default Main;
