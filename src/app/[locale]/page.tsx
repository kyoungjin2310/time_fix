import { redirect } from "next/navigation";
import { getStaticParams } from "../messages/server";

export default async function RootPage({
  params,
}: {
  params: { locale: string };
}) {
  redirect("/home");
}

export function generateStaticParams() {
  return getStaticParams();
}

export const dynamic = "force-dynamic";
