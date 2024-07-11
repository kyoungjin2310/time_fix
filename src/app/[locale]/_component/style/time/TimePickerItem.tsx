import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./timepicker.scss";
import { TimeContext } from "./TimeProvider";
type TimePickerItemProps = {
  itemArr: (string | number)[];
  keyName: string;
  index: number;
  setDate: React.Dispatch<React.SetStateAction<any>>;
};

const TimePickerItem = ({
  itemArr,
  keyName,
  index,
  setDate,
}: TimePickerItemProps) => {
  const [indexs, setIndexs] = useState<number | undefined>(index);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const { value, setValue } = useContext(TimeContext);
  useEffect(() => {
    setIndexs(index);
  }, []);
  useEffect(() => {
    if (value.stop) {
      swiperInstance?.slideToLoop(index);
      console.log(swiperInstance?.realIndex);
    }
  }, [index]);

  return (
    <div className="timePickerWrap">
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        centeredSlides={true}
        className={`${keyName}`}
        onSwiper={setSwiperInstance}
        initialSlide={index}
        onActiveIndexChange={() => setIndexs(index)}
        loop={true}
        onSlideChange={() => {
          setValue({
            ...value,
            stop: false,
          });
          setTimeout(() => {
            setDate(
              `${swiperInstance?.realIndex}`.length == 1
                ? `0${swiperInstance?.realIndex}`
                : swiperInstance?.realIndex,
            );
          }, 0);
        }}
      >
        {itemArr.map((item: string | number, i: number) => (
          <SwiperSlide key={i}>
            <span>{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimePickerItem;
