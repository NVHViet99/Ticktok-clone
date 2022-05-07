import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StoreProvider } from "./components/store";
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";

// Fake comment
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Noi dung cua lesson ${id}`,
//       })
//     );
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
