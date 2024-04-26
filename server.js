require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());


require("./config/database").connectdb();

const user = require("./routers/user");
app.use("/api/v1",user);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})