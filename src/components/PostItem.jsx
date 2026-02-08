import React from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  return (
    <div className="post-items">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Link to={`/post-view/${post.id}`}>Read More</Link>
    </div>
  );
}
