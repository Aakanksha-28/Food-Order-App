import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1>I am from JSX!!!!</h1>;

// React Functional Component
const Title = () => (
  <div>
    <h1>Title here!!!</h1>
  </div>
);

// Component Composition
const HeadingComponent = () => (
  <div>
    <Title />
    <h1 id="heading">heading from the react component!!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
