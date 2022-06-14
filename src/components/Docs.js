import React from 'react';

export default function Dashboard({ isLoggedIn }) {
  return (
    <div style={{ margin: '0 50px' }}>
      <h1>Introducing JSX</h1>
      <p>
        React embraces the fact that rendering logic is inherently coupled with
        other UI logic: how events are handled, how the state changes over time,
        and how the data is prepared for display.
      </p>
      <p>
        Instead of artificially separating technologies by putting markup and
        logic in separate files, React separates concerns with loosely coupled
        units called “components” that contain both. We will come back to
        components in a further section, but if you’re not yet comfortable
        putting markup in JS, this talk might convince you otherwise.
      </p>
      <p>
        React doesn’t require using JSX, but most people find it helpful as a
        visual aid when working with UI inside the JavaScript code. It also
        allows React to show more useful error and warning messages.
      </p>

      <h1>Components and Props</h1>
      <p style={{ fontSize: '18px' }}>
        Components let you split the UI into independent, reusable pieces, and
        think about each piece in isolation. This page provides an introduction
        to the idea of components. You can find a detailed component API
        reference here.
      </p>
      <p>
        Conceptually, components are like JavaScript functions. They accept
        arbitrary inputs (called “props”) and return React elements describing
        what should appear on the screen.
      </p>

      <h2>Composing Components</h2>
      <p>
        Components can refer to other components in their output. This lets us
        use the same component abstraction for any level of detail. A button, a
        form, a dialog, a screen: in React apps, all those are commonly
        expressed as components.
      </p>

      <h1>State and Lifecycle</h1>
      <p style={{ fontSize: '18px' }}>
        This page introduces the concept of state and lifecycle in a React
        component. You can find a detailed component API reference here.
      </p>
      <p>
        You can convert a function component like Clock to a class in five
        steps:
      </p>
      <ul>
        <li>
          Create an ES6 class, with the same name, that extends React.Component.
        </li>
        <li>Add a single empty method to it called render().</li>
        <li>Move the body of the function into the render() method.</li>
        <li>Replace props with this.props in the render() body.</li>
        <li>Delete the remaining empty function declaration.</li>
      </ul>
    </div>
  );
}
