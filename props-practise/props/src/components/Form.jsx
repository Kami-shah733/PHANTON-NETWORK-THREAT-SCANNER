import React from 'react'

const Form = ({pp}) => {
    const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};
  return (
    
    <div>
 <form 
  onSubmit={handleSubmit}
  className="min-h-screen flex items-center justify-center bg-gray-100"
>
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    
    <h1 className="text-2xl font-bold text-center mb-6">
      Sign In
    </h1>

    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
<img src={pp.img} alt="profile" className="w-full h-full object-cover rounded-full" />      </div>
    </div>

    <input
      type="text"
      name="username"
      placeholder={pp.name}
      className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="email"
      name="email"
      placeholder={pp.email}
      className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="password"
      name="password"
      placeholder={pp.passwd}
      className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    >
      {pp.btn}
    </button>

  </div>
</form>
      </div>
  )
}

export default Form
