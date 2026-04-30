import React from "react";

const About = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-md">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-gray-700 text-center leading-relaxed mb-6">
          We are a passionate team of developers focused on building modern,
          responsive, and user-friendly web applications. Our goal is to
          create clean and efficient digital experiences using the latest
          technologies like React and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-lg">Mission</h2>
            <p className="text-sm text-gray-600 mt-2">
              Build high-quality web apps that solve real problems.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-lg">Vision</h2>
            <p className="text-sm text-gray-600 mt-2">
              Become a leading development team in modern web solutions.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-lg">Values</h2>
            <p className="text-sm text-gray-600 mt-2">
              Simplicity, performance, and user experience first.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;