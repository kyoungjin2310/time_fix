import { getStaticParams } from "@/app/messages/server";
import UserGuide from "./_component/UserGuide";

const Guide = () => {
  return <UserGuide />;
};

export default Guide;

export function generateStaticParams() {
  return getStaticParams();
}

export const dynamic = "force-dynamic";
