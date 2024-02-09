import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken
    try {
        if (!token) {
        return res.status(400).send({
            message: "Missing Token"
        })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError && error.message === "invalid signature") {
            return res.status(401).send({
                message: "Invalid Token"
            })
        } else {
            return res.status(500).send({
                message: 'Oops something went wrong.'
            })
        }
    }
}


export default verifyToken;