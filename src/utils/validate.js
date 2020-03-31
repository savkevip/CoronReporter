import Joi from "joi-browser";

export const validate = (data, schema) => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
};

export const hasError = (error, type) => error && !!error[type];
