const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const routes = require('./routes');

const url = "mongodb+srv://hamza123:hamza123@testing.ston8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then((response) => {
        console.log("Connect With DB");
    })
    .catch((error) => {
        console.log("error agaya", error);
    });

app.use(routes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});