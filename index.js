require("./config/connection");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/build'));

app.use(cors({
  origin: "https://lvw-react-app-34cbad5a2068.herokuapp.com/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow credentials such as cookies to be sent
}));

const userRoute = require("./Routers/userRoute");
app.use("/user", userRoute);


app.get("*", (req, res)=>{
  res.sendFile(`${__dirname}/client/build/index.html`)
})

server.listen(process.env.PORT || 5000);