import { ADD_BOOK_ERROR, ADD_BOOK_START, ADD_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_START, EDIT_BOOK_ERROR, EDIT_BOOK_START, EDIT_BOOK_SUCCESS, FETCH_BOOK_ERROR, FETCH_BOOK_START, FETCH_BOOK_SUCCESS } from "../actionTypes/bookActionType"


const initialBookState = {
    list: [],
    loading: false,
    error: null,
    deleting: false,
    addingBook: false,
    addingBookError: null,
    editingBook: false,
    editingBookError: null
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
            };

        case ADD_BOOK_START:
            return {
                ...state, addingBook: true, addingBookError: null
            }

        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                addingBook: false,
                list: [...state.list, action.payload]
            };

        case ADD_BOOK_ERROR:
            return {
                ...state,
                addingBook: false,
                error: action.payload
            }

        case DELETE_BOOK:
            return {
                ...state,
                deleting: false,
                list: state.list.filter((book) => book.id !== action.payload)
            };

        case EDIT_BOOK_START:
            return {
                ...state,
                editingBook: true,
                editingBookError: null
            };

        case EDIT_BOOK_SUCCESS:
            return {
                ...state,
                editingBook: false,
                list: [...state.list, action.payload]
            };

        case EDIT_BOOK_ERROR:
            return {
                ...state,
                editingBook: false,
                editingBookError: action.payload
            };

        default:
            return state;
    }
}