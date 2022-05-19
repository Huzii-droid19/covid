import React, { useState, useRef } from "react";
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import FileUploader from "../../../components/FileUploader";
import "./HRCT.css";
import ImageDisplay from "../../../components/ImageDisplay";
import { useReactToPrint } from "react-to-print";

function HRCT() {
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
    <div className="hrct">
      <div className="hrct__header">
        <Header header_label="HRCT Prediction" name="Nuts" />
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
              <Button color="primary" onClick={() => {}}>
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
        <Button
          color="primary"
          onClick={() => {
            setShow(false);
            setResult("");
            setFile(null);
          }}
        >
          Go back
        </Button>
      ) : null}
    </div>
  );
}

export default HRCT;
