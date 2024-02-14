import { config } from "dotenv";
config();
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;


const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a user with the deafualt role as user
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: "65c5eb5bc8c064547e390908"
        })

        await user.save();

        return res.status(201).send({
            message: "user created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}




const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email }).populate('role');


        if (!user) {
            return res.status(400).send({
                message: "Email Not Found!"
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(401).send({
                message: "Incorrect Password"
            })
        }

        // 
        const token = jwt.sign({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role.name
        }, ACCESS_TOKEN_SECRET);

        // put the decoded user info in the cookie
        res.cookie("accessToken", token, { maxAge: 1000 * 60 * 120, httpOnly: true });
        
        res.status(200).send({
            message: "Logged In",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}


const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken');
        return res.status(200).send({
            message: "Logged Out"
        })
    } catch (error) {
        return res.status(500).send({
            message: "Oops something went wrong"
        })
    }
}


const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const decoded = jwt.verify(req.cookies.accessToken, ACCESS_TOKEN_SECRET)

        console.log(decoded);

        res.status(200).send({users})
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Oops somehing went wrong"
        })
    }
}


export default {
    signup,
    login,
    getUsers,
    logout
}