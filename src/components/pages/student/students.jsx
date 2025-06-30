import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Students = (props) => {
    const students = useSelector((state)=>state.app.students);

    return (
        <>
            <h2>Students</h2>
            {students.map((student, index) => (
                <div className="student-card" key={index}>
                    <h3>Name: {student.name}</h3>
                    <p>Subject: {student.subject}</p>
                    <p>University: {student.university}</p>
                    <Link to={`/student-view/${student.id}`}>View Student</Link>
                </div>
            ))}
        </>
    );
};



export default Students;
