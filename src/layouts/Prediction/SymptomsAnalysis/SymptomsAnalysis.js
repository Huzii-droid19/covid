import React from "react";
import { Button } from "@mui/material";
import "./SymptomsAnalysis.css";
import Header from "../../../components/Header";
import { checkCovidPredictionUsingSymptoms } from "../../../api/prediction";
import AlertModal from "../../../components/Modal";
import { toast } from "react-toastify";

function SymptomsAnalysis() {
  const [hr, setHr] = React.useState();
  const [bpSYS, setBpSYS] = React.useState();
  const [bpDIA, setBpDIA] = React.useState();
  const [temp, setTemp] = React.useState();
  const [rr, setRr] = React.useState();
  const [spo2, setSpo2] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState("");

  const validateData = () => {
    if (parseInt(hr) === 0 || hr === undefined || hr === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter Heart Rate",
      };
    } else if (parseInt(temp) === 0 || temp === undefined || temp === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter Temperature",
      };
    } else if (parseInt(rr) === 0 || rr === undefined || rr === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter Respiratory Rate",
      };
    } else if (parseInt(spo2) === 0 || spo2 === undefined || spo2 === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter SPO2 Level",
      };
    } else if (parseInt(bpSYS) === 0 || bpSYS === undefined || bpSYS === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter Systolic Blood Pressure",
      };
    } else if (parseInt(bpDIA) === 0 || bpDIA === undefined || bpDIA === "") {
      setIsLoading(false);
      return {
        isValid: false,
        message: "Please enter Diastolic Blood Pressure",
      };
    } else {
      return {
        isValid: true,
        message: "",
      };
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const { isValid, message } = validateData();

    if (isValid) {
      const data = {
        HR: parseInt(hr),
        SBP: parseInt(bpSYS),
        DBP: parseInt(bpDIA),
        Temp: parseInt(temp),
        RR: parseInt(rr),
        SPO2: parseInt(spo2),
      };
      checkCovidPredictionUsingSymptoms(data, setResult, setIsLoading);
      setOpen(true);
    } else {
      toast.warn(message);
    }
  };

  return (
    <div className="analysis">
      <div className="analysis__header">
        <Header header_label="Symptoms Analysis" />
      </div>
      <div className="analysis__container">
        <div className="analysis__container__col">
          <div className="analysis__container__col__row">
            <h3 id="label">{`Heart\u00A0Rate`}</h3>
            <input
              type="number"
              placeholder="Heart Rate"
              id="input"
              value={hr}
              onChange={(e) => setHr(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">{`Respiratory Rate`}</h3>
            <input
              type="number"
              placeholder="Respiratory Rate"
              id="input"
              value={rr}
              onChange={(e) => setRr(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">{`BP\u00A0(SYS)`}</h3>
            <input
              type="number"
              placeholder="Systolic blood pressure"
              id="input"
              value={bpSYS}
              onChange={(e) => setBpSYS(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
        </div>

        <div className="analysis__container__col">
          <div className="analysis__container__col__row">
            <h3 id="label">{`Temperature`}</h3>
            <input
              type="number"
              placeholder="Temperature °C"
              id="input"
              value={temp}
              onChange={(e) => setTemp(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">{`SPO2\u00A0Level`}</h3>
            <input
              type="number"
              placeholder="SPO2 Level"
              id="input"
              value={spo2}
              min="0"
              onChange={(e) => setSpo2(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
          <div className="analysis__container__col__row">
            <h3 id="label">{`BP\u00A0(DIA)`}</h3>
            <input
              type="number"
              placeholder="Diastolic blood pressure"
              id="input"
              value={bpDIA}
              onChange={(e) => setBpDIA(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Analyze
      </Button>

      <AlertModal
        open={open && !isLoading}
        setOpen={setOpen}
        label="Prediction Result"
        result={result}
        btnLabel="Close"
      />
    </div>
  );
}

export default SymptomsAnalysis;
