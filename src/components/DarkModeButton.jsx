import { Container, FormControlLabel, Switch } from "@mui/material";
import React from "react";

export const DarkModeButton = () => {

    const handleDarkMode = () => {

    }
    return (
        <>
            <Container align="right">
                <FormControlLabel
                    sx={{ display: 'block' }}
                    control={
                        <Switch
                            onChange={handleDarkMode}
                            name="Dark Mode"
                            color="primary"
                        />
                    }
                    label="Dark Mode"
                />
            </Container>

        </>
    )
}