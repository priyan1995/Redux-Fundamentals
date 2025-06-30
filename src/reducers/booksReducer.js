import { FETCH_BOOK_ERROR, FETCH_BOOK_START, FETCH_BOOK_SUCCESS } from "../actionTypes/bookActionType"


const initialBookState = {
    list: [],
    loading: false,
    error: null
}

export const booksReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case FETCH_BOOK_START:
            return { ...state, loading: true, error: null };
        case FETCH_BOOK_SUCCESS:
            return { ...state, loading: false, list: action.payload };
        case FETCH_BOOK_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
          return  state;
    }
}