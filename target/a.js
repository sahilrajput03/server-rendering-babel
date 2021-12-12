const React = require("react");
const ReactDOMServer = require("react-dom/server");

const cars = [{ id: 1, name: "Ford" }, { id: 2, name: "Audi" }, { id: 3, name: "BMW" }];

const Car = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Car"
    ),
    cars.map(car => React.createElement(
      "li",
      { key: car.id },
      car.name
    ))
  );
};

console.log(ReactDOMServer.renderToString(React.createElement(Car, null)));