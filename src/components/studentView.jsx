import { connect } from "react-redux";
import deleteStudent from "../actions/studentActions";
import { useNavigate, useParams } from "react-router-dom";

const StudentView = ({ students, deleteStudent }) => {
    const { studentId } = useParams();

    const navigate = useNavigate();

    const studentItem = students.find((s) => s.id === studentId);

    const deleteHandler = () => {
        deleteStudent(studentItem.id);
        navigate("/");
    };

    if (!studentItem) {
        return <p>Student not found</p>;
    }

    return (
        <div className="student-view">
            <h2>{studentItem.name}</h2>
            <p>{studentItem.subject}</p>
            <h4>{studentItem.university}</h4>
            <button onClick={deleteHandler}>Delete Student</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    students: state.students,
});

const mapDispatchToProps = (dispatch) => ({
    deleteStudent: (id) => dispatch(deleteStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentView);
