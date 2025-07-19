import { type } from "@testing-library/user-event/dist/type";
import { ADD_BOOK_ERROR, ADD_BOOK_START, ADD_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_START, EDIT_BOOK_ERROR, EDIT_BOOK_START, EDIT_BOOK_SUCCESS, FETCH_BOOK_ERROR, FETCH_BOOK_START, FETCH_BOOK_SUCCESS } from "../actionTypes/bookActionType";


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

export const deleteBook = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_BOOK_START });
        await fetch(`${BookApiUrl}/${id}`, { method: 'DELETE' });

        try {
            dispatch({
                type: DELETE_BOOK,
                payload: id
            })
        } catch (error) {
            return error;
        }

    }
}

export const addBook = (newBook) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_BOOK_START
        })

        try {
            const response = await fetch(BookApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            });

            const data = await response.json();

            dispatch({
                type: ADD_BOOK_SUCCESS,
                payload: data
            });

        } catch (error) {
            dispatch({
                type: ADD_BOOK_ERROR,
                payload: error.message
            })
        }
    }
}

export const editBook = (updateBook, id) => {

    return async (dispatch) => {

        dispatch({
            type: EDIT_BOOK_START
        });

        try {

            const response = await fetch(`${BookApiUrl}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateBook)
            });

            const data = await response.json();

            dispatch({
                type: EDIT_BOOK_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: EDIT_BOOK_ERROR,
                payload: error.message
            })
        }
    }

}