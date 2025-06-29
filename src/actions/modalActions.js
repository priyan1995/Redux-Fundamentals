import { CLOSE_MODAL, OPEN_MODAL } from "../actionTypes/actionType"

export const openModal = () => ({
    type: OPEN_MODAL
})

export const  closeModal = () => ({
    type: CLOSE_MODAL
})