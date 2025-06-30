import { FETCH_BOOK_ERROR, FETCH_BOOK_START, FETCH_BOOK_SUCCESS } from "../actionTypes/bookActionType";


const BookApiUrl = "https://jsonplaceholder.typicode.com/posts";

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_BOOK_START });

        try {
            const response = await fetch(BookApiUrl);
            const bookData = await response.json();
            dispatch({ type: FETCH_BOOK_SUCCESS, payload: bookData })

        } catch (error) {
            dispatch({ type: FETCH_BOOK_ERROR, payload: error.message })
        }
    }
}