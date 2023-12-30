require("./config/connection");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const userRoute = require("./Routers/userRoute");
app.use("/user", userRoute);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/build'));
app.get("*", (req, res)=>{
  res.sendFile(`${__dirname}/client/build/index.html`)
})

server.listen(5000, function () {
  console.log("listen");
});