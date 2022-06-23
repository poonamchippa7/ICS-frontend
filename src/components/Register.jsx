import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/auth"; 
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Register = () => {
  //redux setup
  let { message } = useSelector((state) => state);
  let dispatch = useDispatch();
  const navigate = useNavigate()
  //form Validation
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit:function(values) {
      dispatch(register(values.fullName, values.email, values.password, values.confirmPassword))
        .then(() => {alert("Redirecting to Login Page");navigate('/login', {replace: true});})
        .catch(() => {alert("error")});
    },
    validationSchema: Yup.object({
      fullName: Yup.string().label("Full Name").required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(4).max(16).required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must be mastched")
        .required("Confirm Password is required"),
    }),
  });


  return (
    <>
    <Navbar />
    <div
      className="text-gray-800 antialiased px-4 flex flex-col justify-center sm:py-12"
    >
      
      <div className="w-full relative py-3 sm:max-w-xl mx-auto text-center">
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3"
        >
          <h1 className="text-2xl font-light">
            Register as a User
          </h1>
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div
            className="relative mt-4 pb-6 bg-white sm:rounded-lg text-left"
          >
            <div className="px-4">
              <div className="mb-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={`block w-full rounded border py-1 px-2 ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <span className="text-red-400">{formik.errors.fullName}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`block w-full rounded border py-1 px-2 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-400">{formik.errors.email}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`block w-full rounded border py-1 px-2 ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-400">{formik.errors.password}</span>
                )}
              </div>
              <div className="">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={`block w-full rounded border py-1 px-2 ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <span className="text-red-400">
                      {formik.errors.confirmPassword}
                    </span>
                  )}
              </div>
            </div>
          </div>

          <div className="text-right">
            <button
              className="bg-blue-700 text-white py-2 px-6 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
