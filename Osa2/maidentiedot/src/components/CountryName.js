
import React from "react";
import Button from './Button'




const CountryName = ({country, ClickHandler}) => {

    console.log('show')
    return(

    <div>
        {country.name}    
        <Button handleClick={ClickHandler(country)}/>        
    </div>

    )
            
}
export default CountryName