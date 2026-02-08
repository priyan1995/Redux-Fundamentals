import React, { Suspense } from "react";

const defaultFallback = (
  <div className="lazy-list-fallback" aria-hidden="true">
    Loading…
  </div>
);

/**
 * Reusable lazy-loaded list for use in any loop across the application.
 * Wrap a lazy()-loaded component and an array of items; handles Suspense and mapping.
 *
 * @param {Array} items - Array of items to render (e.g. posts, news, list data).
 * @param {React.ComponentType} LazyComponent - Component loaded with lazy(() => import(...)).
 * @param {(item: any) => string|number} getKey - Returns unique key for each item (e.g. item => item.id).
 * @param {(item: any) => object} getProps - Returns props to pass to LazyComponent for each item (e.g. item => ({ post: item })).
 * @param {React.ReactNode} [fallback] - Optional Suspense fallback (default: "Loading…").
 */
export function LazyList({
  items = [],
  LazyComponent,
  getKey,
  getProps,
  fallback = defaultFallback,
}) {
  if (!LazyComponent || !getKey || !getProps) {
    return null;
  }

  return (
    <Suspense fallback={fallback}>
      {items.map((item) => (
        <LazyComponent key={getKey(item)} {...getProps(item)} />
      ))}
    </Suspense>
  );
}
