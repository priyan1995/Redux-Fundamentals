import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../actions/bookActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Books = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const booksList = useSelector((state) => state.books.list);
    const isLoading = useSelector((state) => state.books.loading);
    const error = useSelector((state) => state.books.error);
    const deleting = useSelector((state) => state.books.deleting);
    const addingBookLoading = useSelector((state)=>state.books.addingBook);
    const editBookLoading = useSelector((state)=>state.books.editingBook);

    useEffect(() => {
        dispatch(fetchBooks())
    },
        [dispatch])


    if (deleting) {
        return <h2>Deleting...</h2>
    }

    if (error) {
        return <h2>Something went wrong...</h2>
    }

    const viewBook = (id) => {
        navigate(`/book-view/${id}`);
    }

    const addBookPage = () => {
        navigate('/add-book');
    }

    return (
        <>
            <div className="df-title-w-button">
                <h2>Books List</h2>
                <Button variant="contained" color="success" onClick={addBookPage} > Add New Book </Button>
            </div>

            {
                isLoading || addingBookLoading || editBookLoading ? <h2> Loading </h2> :
                [...booksList]
                .sort((a,b)=>b.id - a.id)
                    .map((book, index) => (
                        <div className="pd-book-item" key={index}>
                            <p><strong>Name : </strong>{book.title}</p>
                            <p><strong>Description : </strong>{book.body}</p>
                            <Button onClick={() => viewBook(book.id)}>View Book</Button>
                        </div>
                    ))
            }
        </>
    )
}