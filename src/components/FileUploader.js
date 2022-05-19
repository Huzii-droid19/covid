import React, { useEffect, useCallback, useMemo, useRef } from "react";
import "./FileUploader.css";
import { useDropzone } from "react-dropzone";
import Progressbar from "./Progressbar";

function FileUploader(props) {
  const inputRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles[0] ? props.setUploading(true) : props.setUploading(false);
    acceptedFiles[0] ? props.setFile(acceptedFiles[0]) : props.setFile(null);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg,image/png,image/jpg",
  });
  const activeStyle = {
    backgroundColor: "red",
  };

  const acceptStyle = {
    backgroundColor: "rgb(154,220,255,0.5)",
    border: "3px dashed #4D77FF",
  };

  const rejectStyle = {
    backgroundColor: "#ff1744",
  };
  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  const counter = () => {
    if (props.uploading) {
      const timer = setInterval(() => {
        props.setCompleted((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            props.setUploading(false);
            props.setCompleted(0);
            props.setShow(true);
            return 100;
          } else {
            return prev + 2;
          }
        });
      }, 100);
      return () => clearInterval(timer);
    }
  };

  useEffect(() => {
    counter();
  }, []);

  useEffect(() => {
    counter();
  }, [props.uploading]);
  return (
    <div className="fileuploader__container">
      <div
        {...getRootProps({ style })}
        className="fileuploader__container__dotted"
        onClick={() => inputRef.current.click()}
      >
        <img id="folder-icon" src="/assets/upload-icon.png" alt="folder icon" />
        <input
          {...getInputProps()}
          id="file"
          type="file"
          accept=".png, .jpg, .jpeg"
          ref={inputRef}
          onChange={(e) => {
            props.setUploading(true);
            props.setFile(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
        <p id="hint">
          Drop your image here, or <span id="hint__span">browse</span>
        </p>
        <p id="support">Supports: JPG,JPEG,PNG</p>
      </div>
      {props.uploading && <Progressbar completed={props.completed} />}
    </div>
  );
}

export default FileUploader;
