"use client";

import { useEffect } from "react";

const StyleLayout = ({ children }: { children: React.ReactNode }) => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  return <div>{children}</div>;
};

export default StyleLayout;
