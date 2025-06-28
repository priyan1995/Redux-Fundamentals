import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import deleteCar from '../actions/carActions';

const CarView = (props) => {

    const navigate = useNavigate();
    const { carId } = useParams();
    const dispatch = useDispatch();

    const cars = useSelector((state) => state.cars);
    const car = cars.find((s) => s.id === carId);


    const removeCar = () => {
        navigate('/cars');
        dispatch(deleteCar(car.id));
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


export default CarView;