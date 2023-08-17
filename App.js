import React from "react";
import ReactDOM from "react-dom/client";
// React element
const head = <h1 id="heading">This is JSX</h1>;

// Functional components
const Headcomponents = () => {
  return (
    <div>
      <Headshort />
      <h1>This is a heading components</h1>
    </div>
  );
};
const Headshort = () => <h1>This is using arrow function</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headcomponents />);
