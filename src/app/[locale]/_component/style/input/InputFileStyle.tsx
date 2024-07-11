"use client";
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import shortid from "shortid";
import style from "./input.module.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { isDateFormat } from "@/app/utils/common";
import { useI18n } from "@/app/messages/client";
import BtnStyle from "../btn/BtnStyle";
import InputFileNoData from "../nodata/InputFileNoData";
import TxtFileIcon from "../icon/TxtFileIcon";
import DeletedFileIcon from "../icon/DeleteFileIcon";
import TxtFileSmallIcon from "../icon/TxtFileSmallIcon";

dayjs.extend(customParseFormat);
type InputFile = {
  id: string;
  filename: string;
  filetype: string;
  fileimage: string | ArrayBuffer | null;
  datetime: string;
  filesize: string;
};

type Props = {
  onClose: () => void;
};

const InputFileStyle = ({ onClose }: Props) => {
  const [selectedfile, SetSelectedFile] = useState<InputFile[]>([]);
  const t = useI18n();

  const onClosed = () => {
    onClose();
  };
  const filesizes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const eventFiles = (e.target as HTMLInputElement)?.files;
    if (eventFiles) {
      let images = [];
      for (let i = 0; i < eventFiles.length; i++) {
        if (!eventFiles[i].name.match(/.(txt)$/i)) alert("no");
        if (!isDateFormat(eventFiles[i].name.split(".txt")[0])) {
          alert("date no");
          return;
        }
        images.push(eventFiles[i]);
        let reader = new FileReader();
        let file = eventFiles[i];
        reader.onloadend = () => {
          SetSelectedFile((preValue: InputFile[]) => {
            return [
              ...preValue,
              {
                id: shortid.generate(),
                filename: eventFiles[i].name,
                filetype: eventFiles[i].type,
                fileimage: reader.result,
                datetime: eventFiles[i].lastModified.toLocaleString("en-IN"),
                filesize: filesizes(eventFiles[i].size),
              },
            ].reduce((acc: InputFile[], curr) => {
              if (
                acc.findIndex(
                  ({ filename, filesize }) =>
                    filename === curr.filename && filesize === curr.filesize,
                ) === -1
              ) {
                acc.push(curr);
              }
              return acc;
            }, []);
          });
        };
        if (eventFiles[i]) {
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const DeleteSelectFile = (id: number | string) => {
    const result = selectedfile.filter((data, idx) => data.id !== id);
    SetSelectedFile(result);
  };

  const FileUploadSubmit = async (
    e: FormEvent<HTMLFormElement> & { target: HTMLFormElement },
  ) => {
    e.preventDefault();
    e.target.reset();
    SetSelectedFile([]);
  };

  return (
    <div className="fileupload-view">
      <div className="row justify-content-center m-0">
        <div className="col-md-6">
          <div className={style.card}>
            <div className={style["card-body"]}>
              <div className={style["kb-data-box"]}>
                <form onSubmit={FileUploadSubmit}>
                  <div className={style["kb-file-upload"]}>
                    <div
                      className={
                        selectedfile.length > 4
                          ? style["file-upload-small-box"]
                          : style["file-upload-box"]
                      }
                    >
                      <div
                        className={
                          selectedfile.length > 4
                            ? style.selectedFileSmallList
                            : style.selectedFileList
                        }
                      >
                        {selectedfile.length > 0 ? (
                          selectedfile.map((data, index) => {
                            const {
                              id,
                              filename,
                              filetype,
                              fileimage,
                              datetime,
                              filesize,
                            } = data;
                            return filename.match(/.(txt)$/i) ? (
                              <div
                                className={
                                  selectedfile.length > 4
                                    ? style["file-atc-small-box"]
                                    : style["file-atc-box"]
                                }
                                key={id}
                              >
                                <div className={style.TxtFileItem}>
                                  {selectedfile.length > 4 ? (
                                    <TxtFileSmallIcon />
                                  ) : (
                                    <TxtFileIcon />
                                  )}
                                  <h6
                                    className={
                                      selectedfile.length > 4
                                        ? style.TxtFileSmallTitle
                                        : style.TxtFileTitle
                                    }
                                  >
                                    {filename}
                                  </h6>
                                  <div className={style["file-actions"]}>
                                    <button
                                      type="button"
                                      className={style["file-action-btn"]}
                                      onClick={() => DeleteSelectFile(id)}
                                    >
                                      <DeletedFileIcon />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ) : null;
                          })
                        ) : (
                          <InputFileNoData />
                        )}
                      </div>
                      <input
                        type="file"
                        id="fileupload"
                        className={style["file-upload-input"]}
                        onChange={InputChange}
                        multiple
                        accept=".txt"
                      />
                    </div>
                  </div>
                  <p className={style.fileExplan}>{t("fileExplan")}</p>
                  <div className={style.inputfileSubmit}>
                    <BtnStyle
                      opt={{ text: t("fileSubmit") }}
                      onEvent={onClosed}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFileStyle;
