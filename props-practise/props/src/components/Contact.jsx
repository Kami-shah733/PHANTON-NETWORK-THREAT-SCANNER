import React from "react";

const Contact = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;