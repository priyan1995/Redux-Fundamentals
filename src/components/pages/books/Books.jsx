import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../actions/bookActions";

export const Books = () => {

    const dispatch = useDispatch();
    const booksList = useSelector((state) => state.books.list);
    const isLoading = useSelector((state) => state.books.loading);
    const error = useSelector((state)=>state.books.error);

    useEffect(() => {
        dispatch(fetchBooks())
    },
        [dispatch])


    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Something went wrong...</h2>
    }

    return (
        <>
            <h2>Books List</h2>

            {
                booksList.map((book, index) => (
                    <div className="pd-book-item" key={index}>
                        <p><strong>Name : </strong>{book.title}</p>
                        <p><strong>Description : </strong>{book.body}</p>
                    </div>
                ))
            }
        </>
    )
}