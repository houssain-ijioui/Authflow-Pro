

const userIsAlreadyLoggedIn = (req, res, next) => {
    if (req.cookies.accessToken) {
        return res.status(400).send({
            message: "Already Logged In"
        })
    }

    next();
}


export default userIsAlreadyLoggedIn;