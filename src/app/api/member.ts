import { member } from "./index";
import { MemberSignup } from "./types/member";

//게시글 등록
export const signup = (post: MemberSignup) => {
  return member.post("signup", post);
};
