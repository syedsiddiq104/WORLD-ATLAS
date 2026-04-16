import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";

const Country = () => {
  const [countryData, setcountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const APIDATA = async () => {
    try {
      setLoading(true);

      const startTime = Date.now();

      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,currencies,region"
      );

      
      const elapsed = Date.now() - startTime;
      const minDelay = 1500;

      if (elapsed < minDelay) {
        await delay(minDelay - elapsed);
      }

      setcountryData(response.data);

    } catch (err) {
      console.log(err);
      setError("Failed to fetch countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    APIDATA();
  }, []);

useEffect(() => {
  window.scrollTo(0, 0);
}, [countryData]);

  if (loading) return <Loader />;

 
  if (error) return <h1>{error}</h1>;


  if (countryData.length === 0) return <h1>No Countries Found</h1>;


  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countryData.map((curcountry) => (
          <CountryCard
            key={curcountry.name.common}
            country={curcountry}
          />
        ))}
      </ul>
    </section>
  );
};

export default Country;