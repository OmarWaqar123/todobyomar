const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();
const Request_Router = require("./router")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/todo", Request_Router)

mongoose.connect(process.env.DB_Connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("Connected to Database Successfully."))
.catch(e => console.log(e))



app.listen(4000,() => console.log("Listening on Port 4000 ...."))