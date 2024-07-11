import HeaderStyle from "@/app/[locale]/_component/style/header/HeaderStyle";
import { NextPage } from "next";
import RQProvider from "./_component/RQProvider";
import FooterStyle from "../_component/style/footer/FooterStyle";

type Props = {
  children: React.ReactNode;
};

const Page: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      <RQProvider>
        <HeaderStyle />
        {children}
        <FooterStyle />
      </RQProvider>
    </>
  );
};

export default Page;
