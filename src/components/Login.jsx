import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Navbar from "./Navbar";

// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate() 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: function (values) {
      // dispatch(login(values.email, values.password))
      //   .then(() => {
      //     navigate('/user', {replace: true});
      //     window.location.reload();
      //   })
      //   .catch(() => {
      //     alert("error")
      //     setLoading(false);
      //   });
      navigate('/user');
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(4).max(16).required("Password is required"),
    }),
  });
  // const [values, setValues] = useState({
  //   loading: false,
  //   username: " ",
  //   password: " ",
  // });
  // const handleAddFormChange = (event) => {
  //   event.preventDefault();
  //   setValues((values) => ({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   }));
  //   console.log(values);
  // };
  // const performAPICall = async () => {
  //   debugger;
  //   setValues({
  //     loading: true,
  //   });
  //   let error = false, response;
  //   await fetch(``, {
  //     // Adding method type
  //     method: "POST",
  //     // Adding body or contents to send
  //     body: JSON.stringify({
  //       username: values.username,
  //       password: values.password,
  //     }),
  //     // Adding headers to the request
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then(async (res) => {
  //       response = await res.json();
  //     })
  //     .catch((error) => {
  //       error = true;
  //     });
  //   setValues({
  //     loading: false,
  //   });
  //   // if (validateResponse(error, response) === true) {
  //   //   return response;
  //   // }
  // };
  // const validateInput = () => {
  //   debugger;
  //   if (values.username === "") {
  //      message.error("Username field is Empty");
  //     return false;
  //   } else if (values.password === "") {
  //    message.error("Password field is Empty");
  //     return false;
  //   }
  //   return true;
  // };

  // const validateResponse = (errored, response) => {
  //   if (errored === true) {
  //     message.error("Login Failed! Please try again!");
  //     return false;
  //   } else if (errored !== true && response.success === false) {
  //     message.error(`${response?.message}`);
  //     return false;
  //   } else if (errored !== true && response.success === true) {
  //     return true;
  //   }
  // };

  // const persistLogin = (token, username, balance) => {
  //   localStorage.setItem("token", `${token}`);
  //   localStorage.setItem("username", `${username}`);
  //   localStorage.setItem("balance", `${balance}`);
  // };

  // const login = async () => {
  //   debugger;
  //   console.log(values);
  //   const val = validateInput();
  //   if (val === true) {
  //     const response = await performAPICall();
  //     if (response !== null) {
  //       persistLogin(response.token, response.username, response.balance);
  //       setValues({
  //          ...values,
  //           username: "",
  //           password: "",

  //       });
  //       message.success("Login successfull");
  //     } else {
  //       message.error("Error occured");
  //     }
  //   }
  // };

  return (
    <>
      {/* Display Login fields */}
      {/* <div className="flex-container">
        <div className="container">
          <h1>Login to QKart</h1>

          <input
            className="input-field"
            placeholder="Username"
            onChange={(e) => {
              setValues({
                ...username,
                username: e.target.value,
              });
            }}
          />

          <input
            className="input-field"
            placeholder="Password"
            onChange={(e) => {
              setValues({
                password: e.target.value,
              });
            }}
          />

          <button loading={values.loading} type="primary" onClick={login}>
            Login
          </button>
        </div>
      </div> */}
      <div>
      <Navbar />
        <div className=" text-gray-800 antialiased px-4 !py-20 flex flex-col justify-center sm:py-12">
          <div className="w-full relative py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-light">Login to your account</span>
            <form onSubmit={formik.handleSubmit} className="relative mt-4 pb-6 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-blue-400 rounded-t-md"></div>
              <div className="py-6 px-8">
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className={`border w-full h-5 px-3 py-4 text-lg mt-2 hover:outline-none rounded-md ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                ></input>
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-400">{formik.errors.email}</span>
                )}
                <label htmlFor="password" className="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`border w-full h-5 px-3 py-4 mt-2 hover:outline-none rounded-md ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                ></input>
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-400">{formik.errors.password}</span>
                )}
                <div className="flex justify-between items-baseline">
                  <button
                    className="mt-4 bg-blue-700 text-white py-2 px-6 rounded-lg"
                    
                    type="submit"
                  >
                    Login
                  </button>
                  <a href="#" className="text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
            <button className="mt-4 text-xl text-black hover:underline" onClick={()=>{ navigate('/register')}}>
                    Don't have an account, Register Now!!
                  </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
