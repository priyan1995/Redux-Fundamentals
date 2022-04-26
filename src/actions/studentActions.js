const deleteStudent = (id) => {
    return{
        type: 'DELETE_STUDENT',
        id
    }
}

export default deleteStudent