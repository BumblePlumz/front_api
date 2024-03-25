import { Link } from "react-router-dom";

const RIDE = [
  {
    id: 1,
    origin: "Paris",
    destination: "Lyon",
    distance: 450,
  },
  {
    id: 2,
    origin: "Paris",
    destination: "Marseille",
    distance: 800,
  },
  {
    id: 3,
    origin: "Paris",
    destination: "Lille",
    distance: 220,
  },
];

const RidePage: React.FC = () => {
  return (
    <div>
      <h1>Liste des trajets</h1>
      <ul>
        {RIDE.map((ride) => (
          <li key={ride.id}>
            <h3>
              {ride.origin} - {ride.destination}
            </h3>
            <p>Distance: {ride.distance} km</p>
            {/* Ajoutez ici le code pour afficher la carte du trajet */}
            <Link to={`trajet/${ride.id}`}>Voir le trajet</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RidePage;
