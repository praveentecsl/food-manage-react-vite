import { Route, Routes } from "react-router-dom";
import First from "../tailwind/first.jsx";
import React from "react";

const use_ref_2 = () => {
  return (
    <Routes>
      <Route path="/first" element={<First />} />
    </Routes>
  );
};

export default use_ref_2;
