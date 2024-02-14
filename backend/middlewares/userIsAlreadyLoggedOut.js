

const userIsAlreadyLoggedOut = (req, res, next) => {
    if (!req.cookies.accessToken) {
        return res.status(400).send({
            message: "Already Logged Out"
        })
    }

    next();
}


export default userIsAlreadyLoggedOut;