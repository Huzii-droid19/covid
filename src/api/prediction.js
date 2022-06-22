import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./config";

export const checkCovidPredictionUsingXRAY = async (
  image,
  setResult,
  setIsLoading
) => {
  const formData = new FormData();
  formData.append("file", image);
  toast.promise(
    new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/api/predict/xray", formData)
        .then((res) => {
          axios
            .post(`${BASE_URL}/records`, {
              type: "cxr",
              sample: `data:image/png;base64,${res.data.mask}`,
              details: res.data.prediction.details,
              result: res.data.prediction.result,
              user_id: localStorage.getItem("user_id"),
            })
            .then((res) => {
              resolve("Prediction Successfully Completed");
              setIsLoading(false);

              setResult({
                prediction: res.data.data.details,
                image: res.data.data.sample,
              });
            })
            .catch((err) => {
              reject(err.message);
              console.log(err);
            });
        })
        .catch((err) => {
          setIsLoading(false);
          reject("Prediction Failed");
          reject(err.message);
        });
    }),
    {
      pending: "This will take upto 10 to 15 minutes",
      success: {
        render({ data }) {
          return data;
        },
        icon: "✔",
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    }
  );
};

// get testingRecords
export const getTestingRecords = async (setRecords) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/records/${localStorage.getItem("user_id")}`
    );
    setRecords(res.data.data);
    console.log(res.data.data);
  } catch (err) {
    toast.warn(err.message);
  }
};

// symptoms analysis
export const checkCovidPredictionUsingSymptoms = async (
  data,
  setResult,
  setIsLoading
) => {
  toast.promise(
    new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/api/predict/symptoms-analysis", data)
        .then((res) => {
          axios
            .post(`${BASE_URL}/records`, {
              type: "Symptoms Analysis",
              sample: `data:image/png;base64,${res.data.table}`,
              details: res.data.prediction?.details,
              result: res.data.prediction?.result,
              user_id: localStorage.getItem("user_id"),
            })
            .then((res) => {
              console.log(res.data.prediction?.details);
              setResult(res.data.data.details);
              resolve("Prediction Successfully Completed");
              setIsLoading(false);
            });
        })
        .catch((err) => {
          reject(err.message);
        });
    }),
    {
      pending: "Processing...",
      success: {
        render({ data }) {
          return data;
        },
        icon: "✔",
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    }
  );
};

export const getCovidPredictionUsingSymptoms = async (
  data,
  setResult,
  setIsLoading
) => {
  try {
    toast.promise(
      new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8080/api/predict/symptoms-analysis", data)
          .then((res) => {
            setResult(res.data.prediction);
            resolve("Prediction Successfully Completed");
            setIsLoading(false);
          })
          .catch((err) => {
            reject(err.message);
          });
      }),
      {
        pending: "Processing your request",
        success: {
          render({ data }) {
            return data;
          },
          icon: "✔",
        },
        error: {
          render({ data }) {
            return data;
          },
        },
      }
    );
  } catch (err) {
    toast.warn(err.message);
  }
};
