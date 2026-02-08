import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { LazyList } from "../../common/LazyList";

const PostItem = lazy(() => import("../../PostItem"));

const postListFallback = (
  <div className="post-items post-items-placeholder" aria-hidden="true">
    Loading…
  </div>
);

export function PostsListing() {
  const postItems = useSelector((state) => state.app.posts);

  return (
    <>
      <h2 className="main-title">Posts</h2>
      <LazyList
        items={postItems}
        LazyComponent={PostItem}
        getKey={(post) => post.id}
        getProps={(post) => ({ post })}
        fallback={postListFallback}
      />
    </>
  );
}
