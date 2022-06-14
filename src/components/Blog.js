import React from 'react';

export default function About() {
  return (
    <div style={{ margin: '0 50px' }}>
      <h1>React v18.0</h1>
      <p style={{ fontSize: '20px' }}>React 18 is now available on npm!</p>
      <p>
        In our last post, we shared step-by-step instructions for upgrading your
        app to React 18. In this post, we’ll give an overview of what’s new in
        React 18, and what it means for the future.
      </p>
      <p>
        Our latest major version includes out-of-the-box improvements like
        automatic batching, new APIs like startTransition, and streaming
        server-side rendering with support for Suspense.
      </p>
      <p>
        Many of the features in React 18 are built on top of our new concurrent
        renderer, a behind-the-scenes change that unlocks powerful new
        capabilities. Concurrent React is opt-in — it’s only enabled when you
        use a concurrent feature — but we think it will have a big impact on the
        way people build applications.
      </p>
      <p>
        We’ve spent years researching and developing support for concurrency in
        React, and we’ve taken extra care to provide a gradual adoption path for
        existing users. Last summer, we formed the React 18 Working Group to
        gather feedback from experts in the community and ensure a smooth
        upgrade experience for the entire React ecosystem.
      </p>
    </div>
  );
}
