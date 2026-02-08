import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { LazyList } from "../../common/LazyList";

const NewsItem = lazy(() => import("./NewsItem"));

const newsListFallback = (
  <div className="post-items post-items-placeholder" aria-hidden="true">
    Loading…
  </div>
);

const News = () => {
  const news = useSelector((state) => state.app.news);

  if (news.length === 0) {
    return (
      <>
        <h2 className="main-title">News</h2>
        <h2 className="text-center">No News Items Found...!</h2>
      </>
    );
  }

  return (
    <>
      <h2 className="main-title">News</h2>
      <LazyList
        items={news}
        LazyComponent={NewsItem}
        getKey={(item) => item.id}
        getProps={(item) => ({ newsItem: item })}
        fallback={newsListFallback}
      />
    </>
  );
};

export default News;
