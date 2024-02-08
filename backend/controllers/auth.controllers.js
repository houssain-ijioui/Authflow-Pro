import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
            message: "Oops somehing wet wrong"
        })
    }
}



export default {
    signup
}