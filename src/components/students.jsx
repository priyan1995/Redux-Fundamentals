import { connect } from "react-redux"
import { Link } from "react-router-dom"

const Students = (props) => {
    console.log(props.students)
    const students = props.students

    return (
        <>
            <h2>Students</h2>
            {
                students.map(student => {
                    return(
                        <div className="student-card">
                            <h3>Name: {student.name}</h3>
                            <p>Subject: {student.subject}</p>
                            <p>University: {student.university}</p>
                            <Link to={`/student-view/${student.id}`}>View Student</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        students: state.students
    }
}


export default connect(mapStateToProps)(Students)