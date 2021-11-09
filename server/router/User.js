const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
const model = require("../Model/model")

router.get("/user", auth, async (req, res) => {
    try {
        const user = await model.findById(req.user).select("-password")
        res.jon(user)
    } catch (err) {
        res.status(500).send("Server Error")
    }
})

module.exports = router