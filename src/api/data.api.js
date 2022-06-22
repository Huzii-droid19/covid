import axios from "axios";
const BASE_URL = "https://disease.sh";

export const getCovidInfo = (setData) => {
  axios
    .get(`${BASE_URL}/v3/covid-19/all`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCovidInfoByCountry = (setData) => {
  axios
    .get(`${BASE_URL}/v3/covid-19/countries`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCovidHistory = (setData) => {
  axios
    .get(`${BASE_URL}/v3/covid-19/historical/all?lastdays=all`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
