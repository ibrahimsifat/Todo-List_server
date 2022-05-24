const createError = require("http-error");

//404 error
function notFoundHandler(req, res, next) {
  next(createError(404, "your request is not found"));
}
function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "Error page",
  });
}
module.exports = {
  notFoundHandler,
  errorHandler,
};
