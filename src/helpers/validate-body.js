const validationSchema = require('../validation/validation-schema');

module.exports = function (validationKey, req, res) {
  function _validate(req, res, next) {
    const validations = validationSchema[validationKey];

    if (!validations) {
      throw new Error(`Validations for ${validationKey}`);
    }
    // Validate the Joi object, stripping unknown keys
    const { value, error } = validations.validate(req.body);
    if (error) {
      res.json({
        status: false,
        message: error.details[0].message.split('"').join('')
      });
    } else {
      req.body = Object.assign(value, req.body);
      next();
    }
  }

  if (arguments.length === 2) {
    return _validate(req, res);
  }

  return function validate(req, res, next) {
    _validate(req, res, next);
  };
};
