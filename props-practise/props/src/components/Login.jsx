import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const navigate =useNavigate();
    
    const[pass,setpass]=useState("");
    const[email,setmail]=useState("");
    const handle=(e)=>{
      e.preventDefault();
        if(pass=="123"&&email=="admin@gmail.com")
            {
              
                localStorage.setItem("auth","true");
                alert("loged in successfully")
                navigate("/home")
        }
        else
        {alert("loged in failed!")}
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login Portal
        </h1>

        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>{setmail(e.target.value)}}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
            value={pass}
            onChange={(e)=>{setpass(e.target.value)}}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            onClick={handle}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account? Sign up
        </p>

      </div>

    </div>
  );
};

export default Login;