import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { incrementValue } from "../actions/incrementActions";

const Increment = (props) => {

    // const dispatch = useDispatch();

    //  const value = useSelector((state)=>{
    //     const incVal = state.increment;

    //     return incVal;
    //  })



    //  const handleIncrement =() => {
    //     console.log(value);

    //     dispatch(incrementValue);
    //  }


    const stateValue = props.incVal;
    console.log(stateValue)

    const handleIncrement = () => {
        props.incrementVal();
    }


    return (
        <>
            <h2>Click the button to increment value</h2>
            <h3>{stateValue}</h3>
            <button onClick={handleIncrement}> Increment </button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        incVal: state.incrementAmount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementVal: () => dispatch(incrementValue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment); 