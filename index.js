const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { mongo, default: mongoose } = require("mongoose");
const { required } = require("nodemon/lib/config");
const app = express();
const port = 7000;
const dotenv = require("dotenv");
dotenv.config();
const dogRoute = require("./routes/dog");
const { use } = require("express/lib/router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//  hehe tí sửa lại
app.use(cors());

// connect database
mongoose.connect((process.env.databaseLink), () => {
    console.log("Connect successfully")
})


app.use("/products", dogRoute);

app.listen(port, () => {
    console.log(`Server is running at port:  http://localhost:${port}`)
})