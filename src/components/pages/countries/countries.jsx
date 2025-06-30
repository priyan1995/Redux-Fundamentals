import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Countries = (props) => {

    const countries = useSelector((state)=>state.app.countries);
    return (
        <>
            <h2>Countries</h2>
            {
                countries.map(country => {
                    return(
                        <div className="post-items" key={country.id}>
                        <h2>{country.name}</h2>
                        <h4>Capital: {country.capital}</h4>
                        <h4>Population: {country.population}</h4>
                        <Link to={`/country-view/${country.id}`}>View Country</Link>                        
                    </div>
                    )
                })
            }
        </>
    )
}



export default Countries;