import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "div",
  { className: "container" },
  React.createElement("div", { className: "col1" }, [
    React.createElement("h2", { className: "h2" }, "Hello H2 from col1"),
    React.createElement("h3", { className: "h2" }, "Hello H3 from col1"),
  ]),
  React.createElement(
    "div",
    { className: "col2" },
    React.createElement("h2", { className: "h2" }, "Hello H2 from col2 "),
    React.createElement("h3", { className: "h2" }, "Hello H3 from col2"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
