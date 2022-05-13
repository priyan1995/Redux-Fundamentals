import React from 'react';
import { connect } from 'react-redux';
import deleteIceCream from '../actions/iceCreamActions';

const IceCreams = (props) => {

    console.log(props)

    const iceCreamInfo = props.iceCream;

    const deductIceCream = () =>{
        props.deleteIceCream();
        console.log("deducted", iceCreamInfo)
    }


    return (
        <>
            <h1>Number Of Ice Creams: {iceCreamInfo}</h1>

            <button>Make New Ice Cream</button>
            <br /><br />
            <button onClick={deductIceCream}>Sell Ice Cream</button>
        </>
    )
}


const mapStateToProps = (state) =>{
    return{
        iceCream: state.iceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteIceCream: () => dispatch(deleteIceCream()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreams);