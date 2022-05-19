import React, { useState, useRef } from "react";
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import FileUploader from "../../../components/FileUploader";
import "./XRAY.css";
import ImageDisplay from "../../../components/ImageDisplay";
import { useReactToPrint } from "react-to-print";
import axios from "axios";

function XRAY() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [show, setShow] = useState(false);
  const analyzedRef = useRef(null);
  const [result, setResult] = useState("");
  const print = useReactToPrint({
    content: () => analyzedRef.current,
  });
  return (
    <div className="xray">
      <div className="xray__header">
        <Header header_label="XRAY Prediction" name="Nuts" />
      </div>
      {!show ? (
        <FileUploader
          file={file}
          setFile={setFile}
          uploading={uploading}
          setUploading={setUploading}
          completed={completed}
          setCompleted={setCompleted}
          setShow={setShow}
        />
      ) : null}
      {show ? (
        <div className="image__container" ref={analyzedRef}>
          <ImageDisplay
            file={file && URL.createObjectURL(file)}
            filename={file && file.name}
            button={
              <Button
                color="primary"
                onClick={() => {
                  const formData = new FormData();
                  formData.append("file", file);
                  axios
                    .post("http://localhost:8080/api/predict/xray", formData)
                    .then((res) => {
                      setResult(res.data.prediction);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Start Prediction
              </Button>
            }
          />

          <ImageDisplay
            filename={file && file.name}
            file={file && URL.createObjectURL(file)}
            result={result}
            button={
              <Button color="secondary" onClick={print}>
                Print Report
              </Button>
            }
          />
        </div>
      ) : null}
      {show ? (
        <Button color="primary" onClick={() => setShow(false)}>
          Go back
        </Button>
      ) : null}
    </div>
  );
}

export default XRAY;
