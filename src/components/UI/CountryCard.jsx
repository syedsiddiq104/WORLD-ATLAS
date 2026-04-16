import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {

  const { name, flags, population, capital, region } = country;
  console.log(population)
console.log(country)

  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags?.svg} alt={name.common} className="flag" />

        <h2>{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</h2>

        <p className="country-info">
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </p>

        <p className="country-info">
          <strong>Population:</strong> {population}
        </p>

        <span>region: {region}</span>

          <NavLink to={`/country/${name.common}`}>
        <button >
          Read More →
        </button>
          </NavLink>
       
      </div>
    </li>
  );
};

export default CountryCard;
