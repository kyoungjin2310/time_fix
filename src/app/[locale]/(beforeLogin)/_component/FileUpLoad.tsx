"use client";
import React, { useEffect, useState } from "react";
import FileUpLoadBtn from "../../_component/style/btn/FileUpLoadBtn";
import FileUpLoadPopup from "./FileUpLoadPopup";
const FileUpLoad = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.querySelector("html")!.style.overflow = "hidden";
      document.querySelector("header")!.style.zIndex = "100";
    } else {
      document.querySelector("html")!.style.overflow = "auto";
      document.querySelector("header")!.style.zIndex = "200";
    }
  }, [open]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}
      >
        <FileUpLoadBtn open={onOpen} />
      </div>
      {open && <FileUpLoadPopup onClose={onClose} />}
    </>
  );
};

export default FileUpLoad;
