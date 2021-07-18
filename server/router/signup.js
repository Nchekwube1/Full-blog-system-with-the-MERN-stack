const express = require("express")
const mongoose = require("mongoose")
const schema = require("../Model/model")
const bcrypt = require("bcrypt")
const Router = express.Router()
const cors = require("cors")
express().use(cors())


Router.post("/signup", async (req, res) => {
    res.header("Acess-Control-Allow-Origin", "*")

    try {
        schema.find({ email: req.body.email })
            .then((data) => {
                if (data.length > 0) {
                    return res.status(209).json("user already exists with inputed email")
                }
                else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json("An error occured inhashng password" + err)
                        }
                        else {
                            const newUser = new schema({
                                _id: new mongoose.Types.ObjectId(),
                                username: req.body.username,
                                email: req.body.email,
                                password: hash
                            })

                            newUser.save()
                                .then(
                                    res.status(200).json("new user created successfully")

                                )
                                .catch(err => { res.status(500).json({ err: err }) })
                        }
                    })


                }
            })


    }
    catch (err) {
        res.status(422).json({ error: err })
    }

})

module.exports = Router