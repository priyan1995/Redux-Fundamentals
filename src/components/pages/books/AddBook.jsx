import { Box, Button, FormControl, Input, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UiInput } from "../../common/UiInput";
import { addBook } from "../../../actions/bookActions";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addingBook, addingBookError } = useSelector((state) => state.books);

    const [formData, setFormData] = useState({
        title: "",
        body: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            ...formData
        }

        dispatch(addBook(newBook))

        setFormData({
            title: "",
            body: ""
        })

        navigate('/books')

    }





    return (
        <>
            <h2>Add a new Book</h2>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>

                <UiInput
                    type="text"
                    label="Title"
                    value={formData.title}
                    name="title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />

                <UiInput
                    type="text"
                    label="Desciption"
                    value={formData.body}
                    name="body"
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    required
                />


                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={addingBook}
                >
                    {
                        addingBook ? "Adding Book" : "Add Book"
                    }
                </Button>

                {
                    addingBookError &&
                    <p className="text-red"> {addingBookError}</p>
                }
            </Box>

        </>
    )
}