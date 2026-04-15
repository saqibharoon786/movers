import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Dispatch render-event for react-snap after a short delay
setTimeout(() => {
  document.dispatchEvent(new Event("render-event"));
}, 500);
