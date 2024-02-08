import express from "express";
const router = express.Router();
import authControllers from "../controllers/auth.controllers.js";
import validateUserCreationInput from "../middlewares/validateUserCreationInput.js";
import validateUserLoginInput from "../middlewares/validateUserLogin.js";
import checkDuplicatedCredentials from "../middlewares/checkDuplicatedCredenials.js";

// POST create user  @/api/users/signup
router.post('/signup', validateUserCreationInput, checkDuplicatedCredentials, authControllers.signup);

// POST user login @/api/users/login
router.post('/login', validateUserLoginInput, authControllers.login);


export default router;