const express = require("express");
const postRouter=require('./routes/postRoutes')

const app = express();
app.use(express.json());


// route
app.use('/api/v1/post',postRouter)

module.exports=app
