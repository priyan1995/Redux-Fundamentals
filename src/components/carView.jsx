import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import deleteCar from '../actions/carActions';

const CarView = (props) => {

    const history = useHistory();

    const car = props.car;

    const removeCar = () => {
        console.log("car removed");
        props.deleteCar(car.id);
        history.push('/')
    }


    return (
        <>
            <div className="student-view">
                <h2>{car.name}</h2>
                <h3>{car.brand}</h3>
                <h5>Seats: {car.seats}</h5>
                <h5>Engine Capacity: {car.engineCapacity}</h5>
                <button onClick={removeCar}>Remove Car</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let cid = ownProps.match.params.carId;
    return {
        car: state.cars.find(car => car.id == cid)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteCar: (id) => {dispatch(deleteCar(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarView);