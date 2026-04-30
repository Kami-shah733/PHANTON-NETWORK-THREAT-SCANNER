import React, { useState } from "react";

const Count = () => {
  const [state, setstte] = useState(0);

  const setsttee = () => {
    setstte(state + 1);
  };

  const reset=()=>{
    setstte(0);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg w-64 text-center">
        
        <h2 className="text-xl font-semibold mb-4">Counter</h2>

        <p className="text-4xl font-bold mb-6 text-blue-600">
          {state}
        </p>

        <button
          onClick={setsttee}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Count++
        </button>
        
    <button onClick={reset}
    className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">reset</button>
      </div>

    </div>
  );
};

export default Count;