import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

export const UiInput = (props) => {
    return (
        <>
            <FormControl
                sx={{ mb: 2 }}
                variant="outlined"
                fullWidth
            >
                <InputLabel>{props.label}</InputLabel>
                <OutlinedInput
                    type={props.type}
                    label={props.label}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    fullWidth
                    required={props.required}
                    className="mb-2 MuiInputBase-input MuiOutlinedInput-input"
                />

            </FormControl>

        </>
    )
}