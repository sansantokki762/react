import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Step1 from "./Step1.tsx";
import Step2 from "./Step2.tsx";
import Step3 from "./Step3.tsx";
import Step4 from "./Step4.tsx";
createRoot(document.getElementById("root")!).render(
  //!는 non null assertion operator//
  <StrictMode>
    <Step4 />
  </StrictMode>,
);

//!없이 하려면//

/* if (root) {
  createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
  )
} */
