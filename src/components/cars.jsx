import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cars = (props) => {
    console.log(props.cars)
    const cars = props.cars;
    return (
        <>
            <h2 className="main-title">Cars</h2>
            {
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
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Cars);