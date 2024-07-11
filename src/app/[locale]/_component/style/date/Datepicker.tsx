"use client";
import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useCurrentLocale } from "@/app/messages/client";
import { ko } from "date-fns/locale";

import "./datepicker.mobule.css";
import { subDays } from "date-fns";
import { forwardRef } from "@nextui-org/react";
import {
  MyContext,
  MyContextType,
} from "@/app/[locale]/(beforeLogin)/_component/DateProvider";

const Datepicker = () => {
  const locales = useCurrentLocale();
  const [startDate, setStartDate] = useState(new Date());
  const [locale, seLocale] = useState(locales == "kr" ? ko : locales);
  const date = useContext(MyContext);
  const { setValue } = date;
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const highlightWithRanges: any = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        subDays(new Date(), 4),
        subDays(new Date(), 3),
        subDays(new Date(), 2),
        subDays(new Date(), 1),
      ],
    },
  ];

  const onChange = (date: Date | null) => {
    setValue(`${date}`);
    if (date) setStartDate(date);
  };

  return (
    <div className="dateWrap">
      <div className="title">
        <ReactDatePicker
          locale={locale}
          selected={startDate}
          onChange={(date) => onChange(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          customInput={<CustomInput />}
        />
      </div>
      <div className="main">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => onChange(date)}
          onMonthChange={(date) => onChange(date)}
          highlightDates={highlightWithRanges}
          inline
        />
      </div>
    </div>
  );
};

export default Datepicker;
