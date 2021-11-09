require("dotenv").config()
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.jwtSecret


module.exports = function (req, res, next) {
    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).json({
            msg: "No token, authorization denied"
        })
    }

    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.user = decoded.id
        next()
    } catch (err) {
        res.status(401).json({
            msg: "Token is not valid"
        })
    }
}