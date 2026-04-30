import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const[user,setstate]=useState({
    email:"",
    passw:""
  })
  const [toggle, settoggle] = useState(false);
  const [history, setHistory] = useState([]);

  const handle = (e) => {
    e.preventDefault();

    alert(`You have typed:
Email: ${user.email}
Password: ${user.passw}`);
  const newEntry = {
    email:user.email,
    passw:user.passw,
    time: new Date().toLocaleTimeString()
};
  
setHistory([...history,newEntry])

   setstate({email:"",passw:""})
  };

  const settogl = () => {
    settoggle(!toggle);
  };

   const clearhistory=()=>{
    setHistory([]);
   }
  
  return (
    <div
      className={`relative flex items-center justify-center h-screen transition-all ${
        toggle ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >

      {/* Toggle Button */}
      <button
        onClick={settogl}
        className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {toggle ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Login Card */}
      <div
        className={`p-8 rounded-2xl shadow-lg w-80 transition-all ${
          toggle ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            value={user.email}
            className="border p-2 rounded-lg text-black"
            onChange={(e) =>
               setstate({ ...user, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={user.passw}
            className="border p-2 rounded-lg text-black"
            onChange={(e) =>
               setstate({...user, passw:e.target.value})
              
            }
          />

          <button
            type="button"
            onClick={handle}
            className="bg-blue-500 text-white py-2 rounded-lg"
          >
            Login
          </button>

        </form>

        {/* 🔹 HISTORY TABLE (YOU WILL CONNECT IT) */}
       <div className="mt-6 bg-white text-black p-5 rounded-2xl shadow-lg w-full max-w-2xl">

  <h2 className="text-lg font-bold mb-4 text-center">
    Login History
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-center">

      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border">Email</th>
          <th className="p-3 border">Password</th>
          <th className="p-3 border">Time</th>
        </tr>
      </thead>

      <tbody>
        {history.map((ss, i) => (
          <tr key={i} className="border-t">
            <td className="p-3 border">{ss.email}</td>
            <td className="p-3 border">{ss.passw}</td>
            <td className="p-3 border">{ss.time}</td>
          </tr>
        ))}

        <button onClick={clearhistory}>clear</button>
      </tbody>

    </table>
  </div>

</div>

      </div>
    </div>
  );
};

export default LoginForm;