const express = require('express');
const port = process.env.PORT || 3000;
const connectDb = require('./db.js');
const app = express();
const controller = require('./controller/controller.js');

connectDb();

app.use(express.json());
app.use("/auth", controller)

app.listen(port, () => {
    console.log(`Started in ${port}`);
})