const deleteNews = (id) => {
    return{
        type: 'DELETE_NEWS',
        id
    }
}

export default deleteNews