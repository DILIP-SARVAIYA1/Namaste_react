const head = React.createElement("div", { id: "grand_parrent" }, [
  React.createElement(
    "div",
    { id: "parrent" },
    React.createElement("h1", { id: "children" }, "Namaste React"),
    React.createElement("h2", { id: "children2" }, "Namaste React")
  ),
  React.createElement("div", { id: "parrent" }, [
    React.createElement("h1", { id: "children" }, "Namaste React"),
    React.createElement("h2", { id: "children2" }, "Namaste React"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
console.log(head);
