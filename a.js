const React = require("react");
const ReactDOMServer = require("react-dom/server");

const cars = [
  { id: 1, name: "Ford" },
  { id: 2, name: "Audi" },
  { id: 3, name: "BMW" },
];

const Car = () => {
  return (
    <div>
      <h1>Car</h1>

      {cars.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </div>
  );
};

console.log(ReactDOMServer.renderToString(<Car />));
