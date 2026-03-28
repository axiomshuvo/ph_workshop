import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, flags, population, currencies } = country;
  const currenciesList = Object.values(currencies.currencies);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //     setVisited(true);

    //     if (visited) {
    //       setVisited(false);
    //     } else {
    //       setVisited(true);
    //     }

    //     setVisited(visited ? false : true);

    setVisited(!visited);
    handleVisitedCountries(country);
    //     console.log("visited");
  };

  //   console.log(handleVisitedCountries);

  return (
    <div className={`card ${visited ? "visit" : ""}`}>
      <h2>{name.common}</h2>
      <img src={flags.flags.png} alt={flags.flags.alt} />
      <p>population - {population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? "- Big Country" : "- Small Country"}
      </p>
      <p>
        {/* currencies: */}
        {/* {console.log(Object.values(currencies.currencies))} */}
        {/* {currenciesList.map((cur, index) => {
          return (
            <span key={index}>
              {cur.symbol}-{cur.name}
            </span>
          );
        })} */}
      </p>
      <button onClick={handleVisited} type="button">
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => handleVisitedFlag(flags.flags.png, country.cca3.cca3)}
        type="button"
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;

/**
 *
 */
