import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
console.log(<Main />);
const AppLayout = () => (
  <div className="app-wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
