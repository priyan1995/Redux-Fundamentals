import { FETCH_USER_ERROR, FETCH_USER_START, FETCH_USER_SUCCESS } from "../actionTypes/actionType"


export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_USER_START });

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            dispatch({ type: FETCH_USER_SUCCESS, payload: data });

        } catch (error) {
            dispatch({ type: FETCH_USER_ERROR, payload: error.message });
        }
    }
}