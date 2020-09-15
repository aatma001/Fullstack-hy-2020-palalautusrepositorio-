import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios'

import SearchCountry from './components/SearchCountry'


function App() {

  const [filter, setNewFilter] = useState("");
  const [countries, setNewCountries] = useState([])


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setNewCountries(response.data)

      })
  }, [])

    const foundCountries = countries.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setNewFilter(event.target.value);
      };

      const handleShowChange = (country) => (
        setNewFilter(country.name)
      )

      console.log(filter)




  return (
    
    <div>
      <form>
        find countries <input onChange={handleSearchChange} />
      </form>
      <SearchCountry countries={foundCountries}
        handleShowChange={handleShowChange}
      />
    </div>
  
  
  )
}

export default App;
