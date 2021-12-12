const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Car = ({ cars }) => {
  return (
    <div>
      <h1>Car</h1>

      {cars.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </div>
  );
};

module.exports = (cars) => ReactDOMServer.renderToString(<Car cars={cars} />);
