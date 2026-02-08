import React from "react";
import { Link } from "react-router-dom";

export default function NewsItem({ newsItem }) {
  return (
    <div className="post-items">
      <h2>{newsItem.title}</h2>
      <p>{newsItem.body}</p>
      <Link to={`/news-view/${newsItem.id}`}>View More</Link>
    </div>
  );
}
