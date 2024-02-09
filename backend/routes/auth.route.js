import express from "express";
const router = express.Router();
import authControllers from "../controllers/auth.controllers.js";
import validateUserCreationInput from "../middlewares/validateUserCreationInput.js";
import validateUserLoginInput from "../middlewares/validateUserLogin.js";
import checkDuplicatedCredentials from "../middlewares/checkDuplicatedCredenials.js";
import userIsAlreadyLoggedIn from "../middlewares/userIsAlreadyLoggedIn.js";
import userIsAlreadyLoggedOut from "../middlewares/userIsAlreadyLoggedOut.js";


// POST create user  @/api/users/signup
router.post('/signup', validateUserCreationInput, checkDuplicatedCredentials, authControllers.signup);

// POST user login @/api/users/login
router.post('/login', userIsAlreadyLoggedIn, validateUserLoginInput, authControllers.login);

// POST user login @/api/users/login
router.get('/', authControllers.getUsers);

// GET user logout @/api/users/login
router.get('/logout', userIsAlreadyLoggedOut, authControllers.logout);


export default router;