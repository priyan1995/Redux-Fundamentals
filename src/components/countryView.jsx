import React from "react";
import { connect } from "react-redux";

const CountryView = (props) => {

    console.log(props.country );
    const country = props.country;
    
    return (
        <>
             <div className="student-view">
                <h2>{country.name}</h2>
                <h4>Capital: {country.capital}</h4>
                <h4>Population: {country.population}</h4>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let cotrID = ownProps.match.params.countryId;
    return{
        country: state.countries.find(country => country.id == cotrID)
    }
}

export default connect(mapStateToProps)(CountryView)