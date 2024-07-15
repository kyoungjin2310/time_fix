"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import { DateProvider } from "./DateProvider";
import TimeContentWrap from "./TimeContentWrap";
import UserGuideBtn from "../../_component/style/btn/UserGuideBtn";
import { useQuery } from "@tanstack/react-query";
import { getSchedule, getScheduleList } from "@/app/api/schedule";
import dayjs from "dayjs";
import { queryString } from "@/app/utils/common";

const Main = () => {
  const dateLength = queryString({ date: dayjs().format("YYYY-MM") });
  const date = queryString({ date: dayjs().format("YYYY-MM-DD") });
  const { data: schedule, error: scheduleError } = useQuery({
    queryKey: ["date", date],
    queryFn: async () => await getSchedule(dateLength),
  });

  const { data, error } = useQuery({
    queryKey: ["date", date],
    queryFn: async () => await getScheduleList(date),
  });

  if (error || scheduleError) {
    console.log(error, "error");
    console.log(scheduleError, "scheduleError");
  }

  if (data || schedule) {
    console.log(data);
    console.log(schedule);
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
