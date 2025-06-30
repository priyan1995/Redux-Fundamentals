import { useDispatch, useSelector } from "react-redux";
import deleteStudent from "../../../actions/studentActions";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Modal } from "@mui/material";
import { closeModal, openModal } from "../../../actions/modalActions";
import { useEffect } from "react";
import { fetchUsers } from "../../../actions/userActions";

const UserView = (props) => {

    const dispatch = useDispatch();
    const { userId } = useParams();
    const users = useSelector((state) => state.user.users);
    const userLoading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers())
        }
    }, [dispatch, users.length])

    const user = users.find((s) => s.id === parseInt(userId));

    if (error) {
        return <h4>{error}</h4>
    }

    if (userLoading || !user) {
        return <h4>Loading</h4>
    }

    return (
        <>



            <div className="pd-user-view">
                <p>Name: {user.name}</p>
                <p>User Name: {user.username}</p>
                <p>Phone: {user.phone}</p>
                <p>Web: {user.website}</p>
                <p>Address:
                    {user.address.street},
                    {user.address.suite},
                    {user.address.city},
                    {user.address.zipcode},
                    {user.address.geo.lat},
                    {user.address.geo.lng}
                </p>
                <p>Company:
                    {user.company.name}
                    {user.company.catchPhrase}
                    {user.company.bs}
                </p>
            </div>

        </>
    );
};

export default UserView;
