const deleteCountry = (id) => {
    return{
        type: "DELETE_COUNTRY",
        id
    }
}

export default deleteCountry;