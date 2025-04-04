import React from "react";
import { createRoot } from "react-dom/client"; // Use createRoot from react-dom/client
import App from "./App";

const container = document.getElementById("root"); // Ensure the ID matches your HTML file
const root = createRoot(container);

root.render(<App />);
