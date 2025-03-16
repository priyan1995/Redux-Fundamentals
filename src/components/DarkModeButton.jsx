import { Container, FormControlLabel, Switch } from "@mui/material";
import React from "react";

export const DarkModeButton = () => {

    const setDarkTheme = () => {
        document.querySelector('body').setAttribute("data-theme", "dark");
    }

    const setLightTheme = () => {
        document.querySelector('body').setAttribute("data-theme", "light");
    }

    const handleDarkMode = (e) => {
        if(e.target.checked){
            setDarkTheme();
        }else{
            setLightTheme();
        }
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