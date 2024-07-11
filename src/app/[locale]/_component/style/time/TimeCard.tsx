import style from "./timecard.module.css";
type Props = {
  date: any;
};

const TimeCard = ({ date }: Props) => {
  return (
    <>
      <div className={style.timeCardTitleWrap}>
        <h3 className={style.timeTitle}>{date.div}</h3>
        <h4 className={style.timeSubTitle}>{date.subDiv}</h4>
      </div>
      <div className={style.startEndTimeWrap}>
        <div className={style.startEndTime}>
          <span>
            {String(date.startTime)?.substring(0, 2)}:
            {String(date.startTime)?.substring(2, 4)}
          </span>
          <span>~</span>
          <span>
            {String(date.endTime)?.substring(0, 2)}:
            {String(date.endTime)?.substring(2, 4)}
          </span>
        </div>
      </div>
      <div className={style.timeNoteWrap}>
        <p className={style.timeNote}>{date.note}</p>
      </div>
    </>
  );
};

export default TimeCard;
