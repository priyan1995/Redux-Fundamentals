import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UiInput } from "../../common/UiInput";
import { editBook } from "../../../actions/bookActions";
import { UiModal } from "../../common/UiModal";

export const EditBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [editModalOpen, setEditModalOpen] = useState(false);


    const { editingBook, editingBookError } = useSelector((state) => state.books);
    const booksList = useSelector((state) => state.books.list);

    const book = booksList.find((b) => b.id === parseInt(bookId));

    const [formdata, setFormData] = useState({
        title: book?.title || '',
        body: book?.body || ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditModalOpen(true);
    }

    const editBookConfitmation = () => {
        dispatch(editBook(formdata, parseInt(bookId)));
        setEditModalOpen(false)
        navigate('/books');
    }

    const handleCloseModal = () => {
        setEditModalOpen(false);
    }

    if (!book) {
        return <p>Book not found</p>
    }


    return (
        <>
            <h2>Edit Book</h2>


            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>

                <UiInput
                    type="text"
                    label="Title"
                    name="title"
                    required
                    value={formdata.title}
                    onChange={(e) => setFormData({ ...formdata, title: e.target.value })}
                />

                <UiInput
                    type="text"
                    label="Desciption"
                    name="body"
                    value={formdata.body}
                    required
                    onChange={(e) => setFormData({ ...formdata, body: e.target.value })}
                />


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    {
                        editingBook ? "Loading..." : "Edit Book"
                    }
                </Button>

                {
                    editingBookError &&
                    <p className="text-red"> {editingBookError}</p>
                }
            </Box>

            <UiModal
                title="Are you sure you want to update this Book?"
                deleteHandler={editBookConfitmation}
                modalOpen={editModalOpen}
                handleCloseModal={handleCloseModal}
            />


        </>
    )
}