import React from "react";
import { useState } from "react";

// import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// for toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigate
  const navigate = useNavigate();

  // loginHandle function
  const loginHandle = async () => {
    if (!email || !password) {
      return toast.error("Please Provide The Data..!");
    }

    const res = await fetch(`https://enote-back.onrender.com/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    //receiving response
    const loginData = await res.json();

    //condition
    if (loginData.error) {
      // console.log("Invalid Credentials!!");
      // toast.error("Invalid Credentials!!");
      toast.error("Invalid Credentials!!");
    } else {
      navigate("/");
      toast.success("Login Successfully!");

      localStorage.setItem("token", loginData.token);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {/* main div  */}
      <div className=" bg-[#d2cbbf] shadow-md px-8 py-10 rounded-xl ">
        {/* Top Heading  */}
        <div className="">
          <h1 className="text-center text-black text-xl mb-4 font-bold">
            Login
          </h1>
        </div>

        {/* Input 1 Email  */}
        <div className="w-64">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none"
            placeholder="Email"
          />
        </div>

        {/* Input 2 Password  */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#beb9b1] border border-green-700 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none"
            placeholder="Password"
          />
        </div>

        {/* Button For Login  */}
        <div className=" flex justify-center mb-3">
          <button
            onClick={loginHandle}
            className=" bg-green-700 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>

        {/* Link for Signup  */}
        <div>
          <h2 className="text-black">
            Don't have an account{" "}
            <Link className=" text-red-700 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
