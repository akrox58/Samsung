var Joi = require('joi');

var schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().integer().min(0)
}).with('name', 'age');

Joi.validate({ name: 'abc', age: 103 }, schema, function (err, value) { });