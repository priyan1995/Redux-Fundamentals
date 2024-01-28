import React from 'react';
import { connect } from 'react-redux';
import  { deleteIceCream,addIceCream } from '../actions/iceCreamActions';

const IceCreams = (props) => {
    
    const iceCreamInfo = props.iceCream;

    const deductIceCream = () =>{
        props.deleteIceCream();
    }

    const addIceCream = () => {
        props.addIceCream();
    }

    console.log(props);

    return (
        <>
            <h1>Number Of Ice Creams: {iceCreamInfo}</h1>

            <button onClick={addIceCream}>Make New Ice Cream</button>
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
        deleteIceCream: () => dispatch(deleteIceCream()) ,
        addIceCream: () => dispatch(addIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreams);