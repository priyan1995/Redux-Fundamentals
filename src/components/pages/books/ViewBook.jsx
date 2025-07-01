import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBooks } from "../../../actions/bookActions";
import { Button } from "@mui/material";
import { UiModal } from "../../common/UiModal";
import { closeModal, openModal } from "../../../actions/modalActions";

export const ViewBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookList = useSelector((state) => state.books.list);
    const { bookId } = useParams();
    const modalOpen = useSelector((state) => state.app.openmodal);

    useEffect(() => {
        dispatch(fetchBooks())
    },
        [dispatch]
    )

    const bookItem = bookList.find((s) => s.id === parseInt(bookId));

    const deleteConfirmation = () => {
        dispatch(openModal())
    }

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const removeBook = () => {
        
    }

    return (
        <>
            <h2>Book Details</h2>

            <h3>{bookItem.title}</h3>
            <p>{bookItem.body}</p>
            <Button variant="contained" color="success" onClick={deleteConfirmation}>Delete Book</Button>

            <UiModal
                title="Are you sure you want to delete this Book?"
                deleteHandler={removeBook}
                modalOpen={modalOpen}
                handleCloseModal={handleCloseModal}
            />
        </>
    )
}