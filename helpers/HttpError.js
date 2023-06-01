const ErrorMessageLast = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Confict",
};

const HttpError = (status, message = ErrorMessageLast[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
