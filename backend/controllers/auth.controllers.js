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
            roles: "65c4c45ad7e5e9928137206b"
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
        const user = await User.findOne({ email: email })

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

        console.log(ACCESS_TOKEN_SECRET);

        const token = jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET);
        res.cookie("accessToken", token, { maxAge: 1000 * 60 * 10, httpOnly: true });
        
        console.log(req);
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



export default {
    signup,
    login
}