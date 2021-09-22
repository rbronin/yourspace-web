import React from "react";

const $NotFound = () => {
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        placeItems: "center",
        alignItems: "center",
      }}
    >
      <div style={{ alignItems: "center" }}>
        <h1>Oops Not found 😒 </h1>
        <p style={{ textAlign: "center" }}>
          <a href='/'>Go home</a>
        </p>
      </div>
    </div>
  );
};

export default $NotFound;
