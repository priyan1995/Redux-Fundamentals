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

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const user = users.find((s) => s.id === parseInt(userId));

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
                <Button variant="contained" color="error">Delete User</Button>
            </div>

            {/* <Modal
                open={modalOpen}
                onClose={handleCloseModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className="pd-modal"
            >
                <Box className="pd-modal__content">
                    <h2>Are you sure you want to delete this student?</h2>

                    <Button variant="outlined" color="error" onClick={handleCloseModal}>
                        Cancel
                    </Button>

                    <Button variant="contained" color="success" onClick={deleteHandler}>
                        Confirm
                    </Button>

                </Box>
            </Modal> */}
        </>
    );
};

export default UserView;
