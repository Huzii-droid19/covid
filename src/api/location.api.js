import { BASE_URL } from "./config";
import axios from "axios";

export const getTestingData = (setTesting) => {
  axios
    .get(`${BASE_URL}/testing/centers`)
    .then((res) => {
      console.log(res);
      setTesting(res.data.centers);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getVaccinationData = (setVaccination) => {
  axios
    .get(`${BASE_URL}/vaccination/centers`)
    .then((res) => {
      console.log(res);
      setVaccination(res.data.centers);
    })
    .catch((err) => {
      console.log(err);
    });
};
