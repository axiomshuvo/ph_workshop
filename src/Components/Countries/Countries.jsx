import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountries = (country) => {
    //     console.log("Handle all country visit count", country);

    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  //   console.log(countriesData);
  return (
    <>
      <h1>County list</h1>
      <h4>Total Country Visited - {visitedCountry.length} </h4>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="cardarea">
        {countriesData.countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          />
        ))}
        <ol>
          <li></li>
        </ol>
      </div>
    </>
  );
};

export default Countries;
