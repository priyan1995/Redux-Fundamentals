const deleteCar = (id) =>{
    return{
        type: "DELETE_CAR",
        id
    }
}

export default deleteCar;