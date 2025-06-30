import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../actions/bookActions";

export const Books = () => {

    const dispatch = useDispatch();
    const booksList = useSelector((state) => state.books.list);

    useEffect(() => {
        dispatch(fetchBooks())
    },
        [dispatch])

    console.log(booksList);

    return (
        <>
            <h2>Books List</h2>
        </>
    )
}