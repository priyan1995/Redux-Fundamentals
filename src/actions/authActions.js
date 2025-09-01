import { type } from "@testing-library/user-event/dist/type";
import { LOGIN, LOGIN_FAILED, LOGOUT } from "../actionTypes/authActionType"

export const login = (username, password) => {
    if (username === "admin" && password === "openme") {
        return {
            type: LOGIN,
            payload: { username }
        }
    } else {
        alert("Invalid Credentials");
        return {
            type: LOGIN_FAILED
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}