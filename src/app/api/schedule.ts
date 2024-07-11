import { schedule } from ".";
import { CreateScheduleList, FixScheduleList } from "./types/schedule";

//일정 삭제하기
export const deletedSchedule = (id: number) => {
  return schedule.delete(`day/${id}`, { data: id });
};

//달력 - 해당 달의 일정 등록된날짜 체크
export const getSchedule = (query: string) => {
  return schedule.get(`day/upload/check${query}`);
};

//해당 날짜의 일정보기
export const getScheduleList = () => {
  return schedule.get("day/list");
};

//일정 수정
export const FixSchedule = (post: FixScheduleList) => {
  return schedule.patch("update", post);
};

//텍스트 파일 등록
export const FileSchedule = (post: FormData) => {
  return schedule.post("upload", post);
};

//일정 등록
export const createSchedule = (post: CreateScheduleList) => {
  return schedule.post("create", post);
};
