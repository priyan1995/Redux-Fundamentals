import React, { useState, useEffect, useRef, useCallback } from "react";

const DEFAULT_PAGE_SIZE = 10;

/**
 * Renders items in chunks (pageSize). When the user scrolls to the bottom,
 * the next chunk is shown. Use for long lists (posts, news, etc.).
 *
 * @param {Array} items - Full list of items.
 * @param {number} [pageSize=10] - Number of items to show per "page" (loads more when scrolling to bottom).
 * @param {React.ReactNode} children - Render prop: (visibleItems) => JSX (e.g. your list component).
 */
export function InfiniteScrollList({
  items = [],
  pageSize = DEFAULT_PAGE_SIZE,
  children,
}) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef(null);

  const total = items.length;
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < total;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + pageSize, total));
  }, [pageSize, total]);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "100px", threshold: 0 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      {children(visibleItems)}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="infinite-scroll-sentinel"
          aria-hidden="true"
          style={{ minHeight: 1 }}
        />
      )}
    </>
  );
}
