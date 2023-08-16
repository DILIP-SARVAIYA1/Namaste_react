import React from "react";
import ReactDOM from "react-dom/client";

const head = <h1 id="heading">This is JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
console.log(head);
