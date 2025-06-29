import { FETCH_USER_ERROR, FETCH_USER_START, FETCH_USER_SUCCESS } from "../actionTypes/actionType";


const initialUserState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case FETCH_USER_START:
            return { ...state, loading: true, error: null };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case FETCH_USER_ERROR:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default userReducer;