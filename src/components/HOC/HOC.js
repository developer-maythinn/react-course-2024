import React from "react";

// Higher-Order Component (HOC)
export const withBlueBackground = (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Regular component
const HelloWorld = () => {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};

// Using the HOC to wrap the HelloWorld component
const HOC = withBlueBackground(HelloWorld);

export default HOC;
