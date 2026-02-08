import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import News from "./pages/news/news";
import { Button } from "@mui/material";

const PostItem = lazy(() => import("./PostItem"));

const PostListFallback = () => (
  <div className="post-items post-items-placeholder" aria-hidden="true">
    Loading…
  </div>
);

const Home = () => {
  const postItems = useSelector((state) => state.app.posts);
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

      <h2 className="main-title">Posts</h2>

      <Suspense fallback={<PostListFallback />}>
        {postItems.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Suspense>

      <News />
    </>
  );
};

export default Home;
