import React from 'react'
import { useState } from 'react'

const Cond = () => {
    const[password,setpassword]=useState("")
    const[visisblity,setvisible]=useState(false)
    const[valid,setvalid]=useState(false)
    const passregex=/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%]).{6,}$/;
    const setvisibility=()=>{
            setvisible(!visisblity)
        }
        const validity=(value)=>
        {
            const isvalid=passregex.test(value)
            setvalid(isvalid);
        }
  return (
     <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Password Field
        </h2>

        <div className="relative">
          <input
            value={password}
            onChange={(e)=>{setpassword(e.target.value); {validity(e.target.value)}
                
            }}
            type={visisblity? "text": "password"}
            placeholder="Enter your password"
            className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 ${
  valid ? "focus:ring-blue-500" : "focus:ring-red-500"
}`}
          />

         
        </div>

        <button className="w-full mt-4 bg-blue-600
     
         text-white py-2 rounded-lg hover:bg-blue-700 
         "
            onClick={setvisibility}>
        {visisblity ? "hide": "show"}
        </button>
      </div>
    </div>
  )
}

export default Cond
