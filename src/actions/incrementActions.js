import { INCREMENT_VLAUE } from "../actionTypes/actionType"

export const incrementValue = (value) =>({
    type: INCREMENT_VLAUE,
    payload: {value}
})