import React from "react";
import { connect } from "react-redux";

const CountryView = (props) => {

    console.log(props.country );
    
    return (
        <>
            <h4>Country View</h4>
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