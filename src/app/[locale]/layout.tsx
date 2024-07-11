import type { Metadata } from "next";
import "../globals.css";
import { ReactElement } from "react";
import { Providers } from "../providers";
import { I18nProviderClient } from "@/app/messages/client";
import StyleLayout from "@/app/[locale]/_component/style/layout/StyleLayout";
import { cookies } from "next/headers";
import { setStaticParamsLocale } from "next-international/server";

export const metadata: Metadata = {
  title: "Ti:Me",
  description: "당신의 시간은 무엇보다 소중합니다.",
};

function getTheme() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = !themeCookie ? "light" : themeCookie;
  return theme;
}
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  const theme = getTheme() as string;

  setStaticParamsLocale(locale);

  return (
    <html className={theme} style={{ colorScheme: theme }}>
      <body>
        <StyleLayout>
          <I18nProviderClient locale={locale}>
            <Providers>{children}</Providers>
          </I18nProviderClient>
        </StyleLayout>
      </body>
    </html>
  );
}
