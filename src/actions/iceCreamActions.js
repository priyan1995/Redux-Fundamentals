const deleteIceCream = () =>{
    return{
        type: "DELETE_ICE_CREAM"
    }
}

const addIceCream = () => {
    return{
        type: "ADD_ICE_CREAM"
    }
}

export { deleteIceCream, addIceCream };