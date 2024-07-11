"use client";
import { useContext, useEffect, useState } from "react";
import TimeWrap from "./TimeWrap";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "./DateProvider";
import style from "./timewrap.module.css";
import dayjs from "dayjs";
import { useCurrentLocale } from "@/app/messages/client";
import "dayjs/locale/ko";
import NewTimeBtn from "../../_component/style/btn/NewTimeBtn";
import FileUpLoad from "./FileUpLoad";
import AddTimeBtn from "../../_component/style/btn/AddTimeBtn";

export interface TimeItem {
  div?: string;
  subDiv?: string;
  startTime: string;
  endTime: string;
  note?: string;
  add: boolean;
  text?: string;
}

const TimeContentWrap = () => {
  const locale = useCurrentLocale();
  const [lang, seLang] = useState(locale == "kr" ? "ko" : locale);
  const [open, setOpen] = useState<Boolean>(false);
  const date = useContext(MyContext);
  const { value } = date;
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      return [
        {
          div: "Division",
          subDiv: "SubDivision",
          startTime: "0930",
          endTime: "1029",
          note: "This is a space that shows the user's notes",
          add: false,
        },
        {
          div: "Division",
          subDiv: "SubDivision",
          startTime: "1100",
          endTime: "1200",
          note: "This is a space that shows the user's notes This is a space that shows the user's notes",
          add: false,
        },
      ];
    },
  });

  const [time, setTime] = useState([]);

  useEffect(() => {
    let arr = data?.reduce(
      (acc: TimeItem[], current: TimeItem, index: number) => {
        if (acc && acc[index]?.endTime && acc[index + 1]?.startTime) {
          const dateA = new Date(
            `2022/06/01 ${acc[index]?.endTime.substring(0, 2)}:${acc[
              index
            ]?.endTime.substring(2, 4)}:00`,
          );
          const dateB = new Date(
            `2022/06/01 ${acc[index + 1]?.startTime.substring(0, 2)}:${acc[
              index + 1
            ]?.startTime.substring(2, 4)}:00`,
          );
          const diffMSec = dateA.getTime() - dateB.getTime();
          const diffMin = diffMSec / (60 * 1000);
          if (diffMin < -1) {
            const startTime = dayjs(dateA).add(1, "minute").format("hhmm");
            const endTime = dayjs(dateB).add(-1, "minute").format("hhmm");
            data.splice(index + 1, 0, {
              add: true,
              text: `${startTime.substring(0, 2)}:${startTime.substring(
                2,
                4,
              )}~${endTime.substring(0, 2)}:${endTime.substring(2, 4)}`,
              startTime: startTime,
              endTime: endTime,
            });
            return data;
          }
          return data;
        }
      },
      data,
    );

    setTime(
      arr?.reduce((acc: TimeItem[], curr: TimeItem) => {
        if (
          acc.findIndex(
            ({ text, startTime, endTime }) =>
              text === curr.text &&
              startTime == curr.startTime &&
              endTime == curr.endTime,
          ) === -1
        ) {
          acc.push(curr);
        }
        return acc;
      }, []),
    );
  }, [data]);

  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div className={style.timewrap}></div>;
  }
  return (
    <div>
      <div className={style.timewrap}>
        <h2 className={style.timeWrapTitle}>
          <span className={style.date}>{`${dayjs(value)
            .locale(lang)
            .get("date")}`}</span>
          <span className={style.day}>{`${dayjs(value)
            .locale(lang)
            .format("dddd")}`}</span>
        </h2>
        <NewTimeBtn open={open} setOpen={setOpen} />
        {time &&
          time.map((n: any, key: any) =>
            n.add ? (
              <AddTimeBtn
                key={key}
                text={n.text}
                startTime={n.startTime}
                endTime={n.endTime}
              />
            ) : (
              <TimeWrap key={key} date={n} />
            ),
          )}
      </div>
      <FileUpLoad />
    </div>
  );
};

export default TimeContentWrap;
