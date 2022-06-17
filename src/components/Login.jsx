import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

const Login = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: false,
  //     username: "",
  //     password: "",
  //   };
  // }
  // const withRouter = useRouter();
  const [values, setValues] = useState({
    loading: false,
    username: " ",
    password: " ",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(values);
  };
  const performAPICall = async () => {
    debugger;
    setValues({
      loading: true,
    });
    let error = false, response;
    await fetch(``, {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (res) => {
        response = await res.json();
      })
      .catch((error) => {
        error = true;
      });
    setValues({
      loading: false,
    });
    // if (validateResponse(error, response) === true) {
    //   return response;
    // }
  };
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

  const persistLogin = (token, username, balance) => {
    localStorage.setItem("token", `${token}`);
    localStorage.setItem("username", `${username}`);
    localStorage.setItem("balance", `${balance}`);
  };

  const login = async () => {
    debugger;
    // console.log(values);
    // const val = validateInput();
    // if (val === true) {
    //   const response = await performAPICall();
    //   if (response !== null) {
    //     persistLogin(response.token, response.username, response.balance);
    //     setValues({
    //        ...values,
    //         username: "",
    //         password: "",
          
    //     });
    //     message.success("Login successfull");
    //   } else {
    //     message.error("Error occured");
    //   }
    // }
  };

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
        <div className="bg-gray-100 text-gray-800 antialiased px-4 !py-20 flex flex-col justify-center sm:py-12">
          <div className="w-full relative py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-light">Login to your account</span>
            <div className="relative mt-4 pb-6 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-green-800 rounded-t-md"></div>
              <div className="py-6 px-8">
                <label className="block font-semibold">Username or Email</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={handleAddFormChange}
                ></input>
                <label className="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  onChange={handleAddFormChange}
                ></input>
                <div className="flex justify-between items-baseline">
                  <button className="mt-4 bg-green-900 text-white py-2 px-6 rounded-lg" onClick={login}>
                    Login
                  </button>
                  <a href="#" className="text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              
            </div>
            <Link to="register"> Don't have an account, Register Now!!</Link>
            {/* <button className="mt-4 text-xl text-black hover:underline" onClick={()=>{<Register/>}}>
                    Don't have an account, Register Now!!
                  </button> */}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
