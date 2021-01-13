import React from "react";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/lab";

function Messages(props) {
  const { success, info, warning, error } = props;

  return (
    <div>
      {success && (
        <Alert variant="filled" elevation={2} severity="success">
          {success}
        </Alert>
      )}
      {info && (
        <Alert variant="filled" elevation={2} severity="info">
          {info}
        </Alert>
      )}
      {error && (
        <Alert variant="filled" elevation={2} severity="error">
          {error}
        </Alert>
      )}
      {warning && (
        <Alert variant="filled" elevation={2} severity="warning">
          {warning}
        </Alert>
      )}
    </div>
  );
}

Messages.prototype = {
  success: PropTypes.string,
  info: PropTypes.string,
  warning: PropTypes.string,
  error: PropTypes.string,
};

export default Messages;
