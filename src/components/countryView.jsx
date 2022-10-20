import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import deleteCountry from "../actions/countryActions";

const CountryView = (props) => {

    console.log(props.country );
    const country = props.country;
    const history = useHistory();

    const removeCountry = () => {
        props.deleteCountry(country.id);
        history.push("/countries");

    }
    
    return (
        <>
             <div className="student-view">
                <h2>{country.name}</h2>
                <h4>Capital: {country.capital}</h4>
                <h4>Population: {country.population}</h4>
                <button onClick={removeCountry}>Remove Country</button>
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

const mapDispatchToProps = (dispatch) => {
    return{
        deleteCountry: (id) => {dispatch(deleteCountry(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryView)