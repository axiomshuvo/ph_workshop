import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const checkCountry = visitedCountry.find(
      (c) => c.cca3.cca3 === country.cca3.cca3,
    );

    if (checkCountry) {
      const update = visitedCountry.filter(
        (c) => c.cca3.cca3 !== country.cca3.cca3,
      );
      setVisitedCountry(update);
    } else {
      setVisitedCountry([...visitedCountry, country]);
    }
    //     console.log("Handle all country visit count", country);
  };

  const handleVisitedFlag = (flag, countryCode) => {
    const exists = visitedFlags.find((f) => f.code === countryCode);

    if (exists) {
      const updated = visitedFlags.filter((f) => f.code !== countryCode);
      setVisitedFlags(updated);
    } else {
      setVisitedFlags([...visitedFlags, { code: countryCode, flag }]);
    }
  };

  //   console.log(countriesData);
  return (
    <>
      <h1>County list</h1>
      <h4>Total Country Visited - {visitedCountry.length} </h4>
      <h3>Total Flags visited - {visitedFlags.length} </h3>
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
            handleVisitedFlag={handleVisitedFlag}
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
