import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

      {/* Hero Section */}
      <div className="text-center max-w-2xl bg-white p-10 rounded-2xl shadow-md mb-10">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome to My Practice App
        </h1>

        <p className="text-gray-600 text-lg">
          This is a simple React project where you can practice routing, components,
          and UI building with Tailwind CSS.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">

        {/* Home */}
        <Link
          to="/home"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center block"
        >
          <div className="text-4xl mb-3">🏠</div>
          <h2 className="text-xl font-semibold">Home</h2>
          <p className="text-gray-500 text-sm mt-2">
            Go to homepage section
          </p>
        </Link>

        {/* About */}
        <Link
          to="/about"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center block"
        >
          <div className="text-4xl mb-3">ℹ️</div>
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-gray-500 text-sm mt-2">
            Learn more about us
          </p>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center block"
        >
          <div className="text-4xl mb-3">📩</div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-gray-500 text-sm mt-2">
            Get in touch with us
          </p>
        </Link>

      </div>
    </div>
  );
};

export default Home;