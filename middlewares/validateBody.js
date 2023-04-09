const { HttpError } = require("../helpers");

const validateBody = (shema) => {
  const foo = (req, res, next) => {
    const { error } = shema.validate(req.body);
    if (error) {
      next(HttpError(400, "missing required name field"));
    }
    next();
  };
  return foo;
};

module.exports = validateBody;
