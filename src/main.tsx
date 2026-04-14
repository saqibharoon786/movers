import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Dispatch render-event for react-snap after a short delay
setTimeout(() => {
  document.dispatchEvent(new Event("render-event"));
}, 500);
