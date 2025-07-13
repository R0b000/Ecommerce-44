import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./assets/css/global.css"
import RouterConfig from "./config/router.config";
import { AuthProvider } from "./context/auth.context";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>
)