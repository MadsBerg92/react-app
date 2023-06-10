import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import UserDetailsContextProvider from "./Context/UserDetailsContextProvider.tsx";
import Router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserDetailsContextProvider>
      <div>
        <Router />
      </div>
    </UserDetailsContextProvider>
  </React.StrictMode>
);
