import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import deleteCar from '../actions/carActions';
import { UiModal } from './common/UiModal';
import { closeModal, openModal } from '../actions/modalActions';

const CarView = (props) => {

    const navigate = useNavigate();
    const { carId } = useParams();
    const dispatch = useDispatch();

    const cars = useSelector((state) => state.cars);
    const car = cars.find((s) => s.id === carId);
    const modalOpen = useSelector((state) => state.openmodal);

    const removeCar = () => {
        dispatch(deleteCar(car.id));
        dispatch(closeModal());
        navigate('/cars');
    }

    const handleCloseModal = () => {
        dispatch(closeModal());
    }


    return (
        <>
            <div className="student-view">
                <h2>{car.name}</h2>
                <h3>{car.brand}</h3>
                <h5>Seats: {car.seats}</h5>
                <h5>Engine Capacity: {car.engineCapacity}</h5>
                <button onClick={() => dispatch(openModal())}>Remove Car</button>
            </div>

            <UiModal
                title="Are you sure you want to delete this Car?"
                deleteHandler={removeCar}
                modalOpen={modalOpen}
                handleCloseModal={handleCloseModal}
            />
        </>
    )
}


export default CarView;