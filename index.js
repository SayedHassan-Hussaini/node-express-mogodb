const express = require("express");

const app = express();
app.use(express.json());


// route
app.get("/post",(req,res)=>{
  res.status(200).json({message:"ok",data:"This is a data...."})
})

app.post('/post',(req,res)=>{
   res.status(201).json({message:"post created successfully"})
});
app.get('/post/:id',(req,res)=>{
    const {id}=req.params
    res.status(201).json({message:"ok",data:id})
});
app.patch('/post/:id',(req,res)=>{
    const {id}=req.params
    res.status(200).json({message:"Update successfully",data:id})
});
app.delete('post/:id',(req,res)=>{
    const {id}=req.params
    res.status(204).json({message:"Update successfully",data:id})
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server is ready to port ${port}....`);
});
