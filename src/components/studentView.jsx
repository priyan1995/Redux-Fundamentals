import { useDispatch, useSelector } from "react-redux";
import deleteStudent from "../actions/studentActions";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Modal } from "@mui/material";
import { closeModal, openModal } from "../actions/modalActions";

const StudentView = (props) => {

    const { studentId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modalOpen = useSelector((state) => state.openmodal);

    const students = useSelector((state) => state.students);

    const studentItem = students.find((s) => s.id === studentId);

    const deleteHandler = () => {
        dispatch(deleteStudent(studentItem.id));
        dispatch(closeModal());
        navigate("/students");
    };

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    if (!studentItem) {
        return <p>Student not found</p>;
    }

    return (
        <>
            <div className="student-view">
                <h2>{studentItem.name}</h2>
                <p>{studentItem.subject}</p>
                <h4>{studentItem.university}</h4>
                <button onClick={() => dispatch(openModal())}>Delete Student</button>
            </div>

            <Modal
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
            </Modal>
        </>
    );
};

export default StudentView;
