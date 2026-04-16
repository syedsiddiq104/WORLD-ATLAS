import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/UI/Loader";

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id)

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCountry = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${id}?fullText=true`
      );

      setCountry(response.data[0]);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [id]);

  // 🔄 Loading
 if (loading) return <Loader />

  if (!country) return <h1>No Data Found</h1>;


  const name = country?.name?.common;
  const flag = country?.flags?.svg;
  const capital = country?.capital?.[0] || "N/A";
  const population = country?.population?.toLocaleString();
  const region = country?.region;
  const currency = country?.currencies
    ? Object.values(country.currencies)[0].name
    : "N/A";

  return (
    <div className="country-details-card">
  
  <div className="country-card-backBtn">
    <button onClick={() => navigate(-1)}>← Back</button>
  </div>

  <div className="container-card bg-white-box">
    <img src={flag} alt={name} />

    <div className="infoContainer">
      <h1>{name}</h1>

      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Currency:</strong> {currency}</p>
    </div>
  </div>

</div>
  );
};

export default CountryDetails;