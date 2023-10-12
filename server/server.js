// libraries consts
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const connect = require("./database/mongoDb.js");

connect();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const userRoute = require("./routes/userRoutes.js");

app.use("/Note", userRoute);


app.listen(port, () => console.log(`server started on port ${port}`));
