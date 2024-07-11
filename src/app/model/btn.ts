import { MouseEvent } from "react";

export type TabLink = TabLinkList[];
export type TabLinkList = {
  id: number;
  tabTitle: string;
  tabClass: string;
  tabClicked: boolean;
};

export type TabNavLink = {
  id: number | null;
  tabTitle: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>, id: number | null) => void;
};
