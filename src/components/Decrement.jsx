import React from "react";
import { decremenetValue } from "../actions/incrementActions";
import { connect } from "react-redux";

const Decrement = (props) => {

    const decrementHandler = () => {
        props.decrementVal();
    }

    return (
        <>
            <h2>Click the button to decrement</h2>

            <h3>{props.decrVal}</h3>
            <button onClick={decrementHandler}>Decrement</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        decrVal: state.incrementAmount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decrementVal: () => dispatch(decremenetValue())
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(Decrement);
