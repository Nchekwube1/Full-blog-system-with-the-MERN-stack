const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
require("dotenv").config()
const apiKey = process.env.apiKey
const model = require("../Model/model")
// const newsEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
const newsEndpoint = `https://newsapi.org/v2/everything?q=Football&from=2021-11-10&sortBy=popularity&apiKey=${apiKey}`

router.get("/user", auth, async (req, res) => {
    try {
        const user = await model.findById(req.user).select("-password")
        if (user) {
            const news = await fetch(newsEndpoint)
            const corr = news.json()

            res.json({
                news,
                corr
            })
        }
        else {
            res.status(401).json({ msg: "invalid user id" })
        }
        // res.json(user)
    } catch (err) {
        res.status(500).send("Server Error")
    }
})

module.exports = router