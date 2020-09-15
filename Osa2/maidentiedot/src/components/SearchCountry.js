import React from "react";
import Country from "./Country";
import CountryName from "./CountryName";



const SearchCountry = ({countries, handleShowChange, filter,}) =>{

    const ClickHandler = (country) => {
        return () => handleShowChange(country)
    }

   console.log(countries.length)

    if(countries.length > 10){
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    else if(countries.length === 1){
        return (
            <div>
                {countries.map(item => 
                    <Country key={item.name} 
                    country={item}
                    filter={filter} 
                    ClickHandler={ClickHandler}
                    />
                )}
            </div>
        )
    }
    else{
    return(
        <div>
            <ul>
            {countries.map(item =>
                <li key={item.name}>
                    <CountryName country={item}
                    ClickHandler={ClickHandler}
                    />
                </li>
                )}
            </ul>
        </div>
    )
    }
}

export default SearchCountry;