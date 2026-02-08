import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { LazyList } from "../../common/LazyList";
import { InfiniteScrollList } from "../../common/InfiniteScrollList";

const PostItem = lazy(() => import("../../PostItem"));

const POSTS_PAGE_SIZE = 10;

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
      <InfiniteScrollList items={postItems} pageSize={POSTS_PAGE_SIZE}>
        {(visibleItems) => (
          <LazyList
            items={visibleItems}
            LazyComponent={PostItem}
            getKey={(post) => post.id}
            getProps={(post) => ({ post })}
            fallback={postListFallback}
          />
        )}
      </InfiniteScrollList>
    </>
  );
}
