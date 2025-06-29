import { Box, Button, Modal } from "@mui/material";
import React from "react";

export const UiModal = (props) => {
    return (
        <>
            <Modal
                open={props?.modalOpen}
                onClose={props?.handleCloseModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className="pd-modal"
            >
                <Box className="pd-modal__content">
                    <h2>{props?.title}</h2>

                    <Button variant="outlined" color="error" onClick={props?.handleCloseModal}>
                        Cancel
                    </Button>

                    <Button variant="contained" color="success" onClick={props?.deleteHandler}>
                        Confirm
                    </Button>

                </Box>
            </Modal>
        </>
    )
}