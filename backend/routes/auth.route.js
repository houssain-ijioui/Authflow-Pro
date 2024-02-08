import express from "express";
const router = express.Router();
import authControllers from "../controllers/auth.controllers.js";
import validateUserCreationInput from "../middlewares/validateUserCreationInput.js";



// POST @/api/users/signup
router.post('/signup', validateUserCreationInput, authControllers.signup);


export default router;