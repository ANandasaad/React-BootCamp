import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading 1",
//     key:"h1"
//   },
//   "Heading 1"
// );
// const heading1 = React.createElement(
//   "h2",
//   {
//     id: "heading 2",
//     key:"h2"
//   },
//   "Heading 2"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading1]
// );

//--------jsx-----//
const heading = (
  <h1 id="title" key="h1">
    {" "}
    Namaste React
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

/// Component

const HeaderCompontent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React Functional Component</h1>
      <h1>This h1 tag</h1>
    </div>
  );
};
root.render(<HeaderCompontent/>);
// root.render(heading);
