const express = require("express");

const app = express();


// route
app.get("/",(req,res)=>{
  res.status(200).json({message:"ok",data:"This is a data...."})
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server is ready to port ${port}....`);
});
