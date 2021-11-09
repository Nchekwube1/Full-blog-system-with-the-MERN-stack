const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const Signup = require("./router/signup")
const Signin = require("./router/signin")
require("dotenv").config()



const port = process.env.PORT
app.use(express.json())
app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:3000",
            "http://localhost:3000/signin",
            "http://localhost:3000/signup"]
    }
))
app.use(function (req, res, next) {
    // res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.use("/", Signup)
app.use("/", Signin)

mongoose.connect("mongodb://localhost:27017/blogProfiles", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("yay connectd successfully") }).catch(err => console.log("oh no an error ocured"))

const db = mongoose.connection

db.on("error", () => {
    console.log("an error occured");
})
db.once("open", () => { console.log("db open") })

mongoose.Promise = global.Promise

app.get("/", (req, res) => {
    res.send("<h1>welcome to The Blog server</h1>")
})

app.listen(port, () => {
    console.log(`listening for requests on port ${port}`);
})
