require("./config/connection");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/build'));

app.use(cors());

const userRoute = require("./Routers/userRoute");
app.use("/user", userRoute);

if(process.env.NODE_ENV === 'production'){
  app.get("/*", (req, res)=>{
    res.sendFile(`${__dirname}/client/build/index.html`)
  })
}

server.listen(process.env.PORT || 5000);