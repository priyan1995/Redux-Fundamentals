import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Cars = (props) => {

    const cars = useSelector((state) => state.app.cars);

    return (
        <>
            <h2 className="main-title">Cars</h2>
            {
                cars.length === 0 ? (
                    <h2>No cars found</h2>
                ) :
                    (
                        cars.map(car => {
                            return (
                                <div className="post-items" key={car.id}>
                                    <h2>{car.brand}</h2>
                                    <h4>{car.name}</h4>
                                    <h5>Seats: {car.seats}</h5>
                                    <h5>Engine: {car.engineCapacity}</h5>
                                    <Link to={`/car-view/${car.id}`}>View Car</Link>
                                </div>
                            )
                        })
                    )

            }
        </>
    )
}


export default Cars;