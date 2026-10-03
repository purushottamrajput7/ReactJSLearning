/*

<div class = "container">
      <div class = "col1">
            <h2 class = "h2">Hello H2 from col1<h2>
      <div>
      <div class = "col2">
            <h2 class = "h2">Hello H2 from col2<h2>
      <div>
<div>



*/

//const root = document.getElementById("root");
// const heading = React.createElement(
//   "h1",
//   { className: "heading", id: "h1" },
//   "Hello World!",
// );

// console.log(heading);

// ReactDOM.createRoot(root).render(heading);

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
    React.createElement("h2", { className: "h2" }, "Hello H2 from col2"),
    React.createElement("h3", { className: "h2" }, "Hello H3 from col2"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
