import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/Header";
import { Button } from "@mui/material";
import FileUploader from "../../../components/FileUploader";
import "./XRAY.css";
import ImageDisplay from "../../../components/ImageDisplay";
import { checkCovidPredictionUsingXRAY } from "../../../api/prediction";

function XRAY() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [show, setShow] = useState(false);
  const analyzedRef = useRef(null);
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handlePrediction = () => {
    setIsLoading(true);
    checkCovidPredictionUsingXRAY(file, setResult, setIsLoading);
  };

  return (
    <div className="xray">
      <div className="xray__header">
        <Header header_label="XRAY Prediction" name="Nuts" />
      </div>
      {!show && (
        <FileUploader
          file={file}
          setFile={setFile}
          uploading={uploading}
          setUploading={setUploading}
          completed={completed}
          setCompleted={setCompleted}
          setShow={setShow}
        />
      )}
      {show && (
        <div className="image__container" ref={analyzedRef}>
          <ImageDisplay
            label="Uploaded Image"
            file={file && URL.createObjectURL(file)}
            filename={file?.name}
            button={
              <Button color="primary" onClick={handlePrediction}>
                Start Prediction
              </Button>
            }
          />
          <ImageDisplay
            isLoading={isLoading}
            label="Predicted Image"
            filename={result?.prediction}
            file={result?.image}
            // result={result}
            button={null}
          />
        </div>
      )}
      {show && (
        <Button color="primary" onClick={() => setShow(false)}>
          Go back
        </Button>
      )}
    </div>
  );
}

export default XRAY;
