import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = (props) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        background: "#242b3d5e",
      }}
    >
      <CircularProgress {...props} />
    </div>
  );
};

export default Loading;
