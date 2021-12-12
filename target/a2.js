const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Car = ({ cars }) => {
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

module.exports = cars => ReactDOMServer.renderToString(React.createElement(Car, { cars: cars }));