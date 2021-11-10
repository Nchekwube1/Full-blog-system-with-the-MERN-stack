const express = require("express")
const schema = require("../Model/model")
const bcrypt = require("bcrypt")
const app = express()
const auth = require("../middlewares/auth")
require("dotenv").config()
const jwt = require('jsonwebtoken')
const parser = require("cookie-parser")
const Router = express.Router()

app.use(parser())


const jwtSecret = process.env.jwtSecret


Router.post("/signin", async (req, res) => {

    try {
        schema.find({ email: req.body.email })
            .then(data => {
                if (data < 1) {
                    return res.status(209).json({ error: "user not found" })
                }

                else {
                    bcrypt.compare(req.body.password, data[0].password, (err, result) => {
                        if (err) {
                            return res.status(208).json({ message: "problem from bcrypt" })
                        }
                        if (result) {

                            // data to encode in token
                            const user = data[0]
                            const { _id, username, date } = user

                            jwt.sign({ id: _id }, jwtSecret, {
                                expiresIn: 360000
                            }, (err, token) => {
                                if (err) {
                                    throw err
                                }
                                return res.send({ token })
                            })



                            // create cookie
                            // return res.cookie('the-blog-user', token,
                            //     { httpOnly: true, maxAge: 3600, sameSite: "none", secure: true, path: "/" })
                            //     .status(200)
                            //     .json({ message: 'login successfull' })


                        }
                        else {
                            return res.status(208).json({ message: "problem from bcrypt" })
                        }
                    })
                }
            })
    }

    catch (err) {
        return res.status(500).json({ message: err })
    }

})

module.exports = Router