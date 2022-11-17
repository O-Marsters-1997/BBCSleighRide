import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./state/store";
import SantaProvider from "./contexts/SantaContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SantaProvider>
        <App />
      </SantaProvider>
    </BrowserRouter>
  </Provider>,
);
