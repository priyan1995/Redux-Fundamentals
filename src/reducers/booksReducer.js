import { DELETE_BOOK, DELETE_BOOK_START, FETCH_BOOK_ERROR, FETCH_BOOK_START, FETCH_BOOK_SUCCESS } from "../actionTypes/bookActionType"


const initialBookState = {
    list: [],
    loading: false,
    error: null,
    deleting: false
}

export const booksReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case FETCH_BOOK_START:
            return { ...state, loading: true, error: null };
        case FETCH_BOOK_SUCCESS:
            return { ...state, loading: false, list: action.payload };
        case FETCH_BOOK_ERROR:
            return { ...state, loading: false, error: action.payload };
        case DELETE_BOOK_START:
            return {
                ...state, deleting: true
            }
        case DELETE_BOOK:
            return {
                ...state,
                deleting: false,
                list: state.list.filter((book) => book.id !== action.payload)
            };
        default:
            return state;
    }
}