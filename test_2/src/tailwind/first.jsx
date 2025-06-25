// import '../index.css'

import React from "react";

const first = () => {
  return (
    <>
      <div>first</div>

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Hello Tailwind!
      </h1>

      <br />

      <h1 className="text-3xl font-bold underline">venuja!</h1>

      <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
        Welcome to Tailwind + React!
      </div>

      <div className="bg-red-500 text-white p-4 rounded-md shadow-md">
        Multicolored background with Tailwind!
      </div>

      <div class="h-48 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 text-white flex items-center justify-center">
        Beautiful Gradient!
      </div>

      <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white p-4 rounded-md shadow-md">
        Stylish Multicolored Background
      </div>

      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>

      <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
        Welcome to Tailwind + React!
      </div>

      <div className="bg-pink-400 p-6 rounded-md shadow-md">
        <div className="bg-green-500 p-4 text-white rounded">
          I’m the green inner box! ok mannnnnnnn
        </div>
      </div>
    </>
  );
};

export default first;
