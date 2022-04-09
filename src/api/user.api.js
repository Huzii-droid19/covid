import { BASE_URL } from "./config";
import axios from "axios";
import { toast } from "react-toastify";

const mailformat =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const login = (email, password, navigate) => {
  if (email.length > 0 && password.length > 0) {
    if (email.match(mailformat)) {
      axios
        .post(`${BASE_URL}/user/login/`, { email, password })
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            toast.success(res.data.message);
            localStorage.setItem("user", res.data.user);
            localStorage.setItem("user-login", true);
            navigate("/main/dashboard");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            toast.error("Invalid password");
          }
          if (err.response.status === 404) {
            toast.error("User not found");
          }
        });
    } else {
      toast.warning("Please Provide valid email address");
    }
  } else {
    toast.warning("Please provide email and password");
  }
};

export const signUp = (name, email, password, navigate) => {
  if (name.length > 0 && email.length > 0 && password.length > 0) {
    if (email.match(mailformat)) {
      axios
        .post(`${BASE_URL}/user/signup/`, { name, email, password })
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            toast.success(res.data.message);
            localStorage.setItem("user", res.data.user);
            localStorage.setItem("user-login", true);
            navigate("/main/dashboard");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            toast.error("User already exists");
          }
        });
    } else {
      toast.warning("Please provide a valid email address");
    }
  } else {
    toast.warning("Please provide email and password");
  }
};
