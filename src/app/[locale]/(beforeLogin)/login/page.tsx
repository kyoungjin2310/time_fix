import style from "./login.module.css";
import LoginBox from "./_component/LoginBox";
import { getStaticParams } from "@/app/messages/server";
const Page = ({}) => {
  return (
    <div className={style.checkBoxWrap}>
      <LoginBox />
    </div>
  );
};

export default Page;

export function generateStaticParams() {
  return getStaticParams();
}
export const dynamic = "force-dynamic";
