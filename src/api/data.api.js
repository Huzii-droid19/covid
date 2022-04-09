import { API_URL } from "./config";
import axios from "axios";

export const getData = () => {
  axios
    .get(API_URL)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
