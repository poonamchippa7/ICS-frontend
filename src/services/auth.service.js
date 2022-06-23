import axios from "axios";

const API_URL = "https://2a40c753-e4b4-45c9-858f-64456fc6016c.mock.pstmn.io/";

const register = async (fullName, email, password, confirmPassword) => {
  return (await axios.post(API_URL + "register", {
    "fullName":fullName,
    "email":email,
    "password":password,
    "confirmPassword":confirmPassword,
  }));
};

const login = async (email, password) => {
  return(await axios
    .post(API_URL + "login", {
      "email":email,
      "password":password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }));
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
