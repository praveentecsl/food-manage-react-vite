import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Bits from "./new_comp/bits.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <>
        <Bits />


      </>
    </BrowserRouter>
  </StrictMode>
);
