
const signup = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    res.send({
        firstName,
        lastName,
        email,
        password
    })
}



export default {
    signup
}