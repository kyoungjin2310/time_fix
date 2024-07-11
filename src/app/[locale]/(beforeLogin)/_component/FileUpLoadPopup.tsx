import React from "react";
import InputFileStyle from "../../_component/style/input/InputFileStyle";
import FileDownLoad from "../../_component/style/btn/FileDownLoad";
import PopupCloseBtn from "../../_component/style/btn/PopupCloseBtn";
import style from "./fileupload.module.css";

type Props = {
  onClose: () => void;
};

const FileUpLoadPopup = ({ onClose }: Props) => {
  return (
    <div className={style.fileUpLoadPopupWrap}>
      <div className={style.fileUpLoadPopup}>
        <FileDownLoad />
        <InputFileStyle onClose={onClose} />
        <PopupCloseBtn onClose={onClose} />
      </div>
    </div>
  );
};

export default FileUpLoadPopup;
