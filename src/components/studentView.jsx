import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import deleteStudent from "../actions/studentActions";

const StudentView = (props) => {
    // console.log(props.students);
    const studentItem = props.students
    const history = useHistory();

    const deleteHandler =() =>{
        console.log('deleted');
        props.deleteStudent(props.students.id);
        history.push('/');

    }
    return (
        <>
            <div className="student-view">
                <h2>{studentItem.name}</h2>
                <p>{studentItem.subject}</p>
                <h4>{studentItem.university}</h4>

                <button onClick={deleteHandler}>Delete Student</button>
            </div>
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    let newId = ownProps.match.params.studentId;

    return {
        students: state.students.find(students => students.id === newId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteStudent: (id) => {dispatch(deleteStudent(id))}
    }
}


export default connect( mapStateToProps, mapDispatchToProps )(StudentView)