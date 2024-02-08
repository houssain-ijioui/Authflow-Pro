import Joi from "joi";

const creationValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

const validateUserCreation = (data) => {
    return creationValidationSchema.validate(data, { abortEarly: false });
}


const validateUserCreationInput = async (req, res, next) => {
    const validation = validateUserCreation(req.body);

    if (validation.error) {
        return res.status(400).send({
            message: "Invalid Data",
            errors: validation.error.details[0].message
        })
    }

    next();
}

export default validateUserCreationInput;