import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UiInput } from "../common/UiInput";
import { login } from "../../actions/authActions";

export const Login = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
        if (username === "admin" && password === "1234") {
            navigate('/');
        } else {
            alert("Invalid Credentials");
        }

        if (isAuthenticated) {
            navigate('/');
        }
    }

    return (
        <>
            <h2 className="main-title">Login</h2>

            <Box component="form" onSubmit={loginSubmit}>

                <UiInput
                    type="text"
                    label="Username"
                    name="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <UiInput
                    type="password"
                    label="Password"
                    name="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />



                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Login
                </Button>



            </Box>
        </>
    )
}