const express = require("express");
const postRouter=require('./routes/postRoutes')

const app = express();
app.use(express.json());


// route
app.use('/api/v1/post',postRouter)

const port = 5000;
app.listen(port, () => {
  console.log(`Server is ready to port ${port}....`);
});
