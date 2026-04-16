import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Country: {decodeURIComponent(name)}</h1>
    </div>
  );
};

export default CountryDetails;