import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import deleteCountry from "../../../actions/countryActions";
import { UiModal } from "../../common/UiModal";
import { closeModal, openModal } from "../../../actions/modalActions";

const CountryView = (props) => {

    const dispatch = useDispatch();
    const { countryId } = useParams();
    const navigate = useNavigate();

    const countryitems = useSelector((state) => state.app.countries);
    const country = countryitems.find((s) => s.id === countryId);
    const modalOpen = useSelector((state) => state.app.openmodal);


    const deleteHandeler = () => {
        dispatch(deleteCountry(countryId));
        dispatch(closeModal());
        navigate("/countries");

    }

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    return (
        <>
            <div className="student-view">
                <h2>{country.name}</h2>
                <h4>Capital: {country.capital}</h4>
                <h4>Population: {country.population}</h4>
                <button onClick={()=>dispatch(openModal())}>Remove Country</button>
            </div>

            <UiModal
                title="Are you sure you want to delete this Country?"
                deleteHandler={deleteHandeler}
                modalOpen={modalOpen}
                handleCloseModal={handleCloseModal}
            />

        </>
    )
}


export default CountryView;