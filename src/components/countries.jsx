import React from "react";
import { connect } from "react-redux";

const Countries = (props) => {
    console.log(props.countries);
    const countries = props.countries;
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
                    </div>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        countries: state.countries
    }
}

export default connect(mapStateToProps)(Countries);