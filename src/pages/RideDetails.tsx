import { useParams } from "react-router-dom";

// interface Ride {
//   id: number;
//   origin: string;
//   destination: string;
//   distance: number;
// }

const RideDetails: React.FC = () => {
  const params = useParams();
  // TODO : load the page?ride? with the id from the URL

  return (
    <div>
      <h1>Détails du trajet</h1>
      <h3>{params.rideId}</h3>
    </div>
  );
};

export default RideDetails;
