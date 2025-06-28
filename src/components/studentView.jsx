import { connect, useDispatch, useSelector } from "react-redux";
import deleteStudent from "../actions/studentActions";
import { useNavigate, useParams } from "react-router-dom";

const StudentView = (props) => {

    const { studentId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const students = useSelector((state)=>state.students);

    const studentItem = students.find((s) => s.id === studentId);

    const deleteHandler = () => {
        dispatch(deleteStudent(studentItem.id));    
        navigate("/students");
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

export default StudentView;
