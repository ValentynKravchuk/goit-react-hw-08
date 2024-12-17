import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../src/components/App/App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </HelmetProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
