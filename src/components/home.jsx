import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const imageUploadUrl = () => {
    navigate("/image-upload");
  };

  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="pd-nav-logout"
        onClick={imageUploadUrl}
      >
        Image Upload
      </Button>
    </>
  );
};

export default Home;
