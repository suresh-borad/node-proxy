const Joi = require('joi');

module.exports = {
  generateToken: Joi.object({
    grant_type: Joi.string().required(),
  }),
};
