import { NextPage } from "next";
import Main from "@/app/[locale]/(beforeLogin)/_component/Main";
import { getStaticParams } from "@/app/messages/server";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <Main />;
};

export default Page;

export function generateStaticParams() {
  return getStaticParams();
}
export const dynamic = "force-dynamic";
