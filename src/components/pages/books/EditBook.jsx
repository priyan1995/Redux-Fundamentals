import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UiInput } from "../../common/UiInput";

export const EditBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { bookId } = useParams();


    const { editingBook, editingBookError } = useSelector((state) => state.books);
    const booksList = useSelector((state) => state.books.list);

    const book = booksList.find((b) => b.id === parseInt(bookId));


    const handleSubmit = (e) => {

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
                />

                <UiInput
                    type="text"
                    label="Desciption"
                    name="body"
                    required
                />


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    {/* {
                        addingBook ? "Adding Book" : "Add Book"
                    } */}
                </Button>

                {/* {
                    addingBookError &&
                    <p className="text-red"> {addingBookError}</p>
                } */}
            </Box>


        </>
    )
}