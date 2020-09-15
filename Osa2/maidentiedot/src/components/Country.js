import React from "react";
import ShowWeather from './ShowWeather'


const Country = ({ country, hideHandler,filter }) => {


 console.log(filter)
    
  
  return (
    <div>
      <h2>
        {country.name}
      </h2>
      <div>Capital {country.capital}</div>
      <div>Population {country.population}</div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(item =>
          <li key={item.name}> {item.name}</li>
          )}
      </ul>
      <div>
          <img src={country.flag} alt="flag" height="200" width="200"  />
        </div>
      <div>
        <ShowWeather country={country}/>
      </div>
    </div>
  );
};

export default Country;
