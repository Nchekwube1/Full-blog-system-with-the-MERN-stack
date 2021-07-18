const express = require("express")
const schema = require("../Model/model")
const bcrypt = require("bcrypt")
const Router = express.Router()
const cors = require("cors")
express().use(cors())

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
                            return res.status(200).json({ messaage: data })
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