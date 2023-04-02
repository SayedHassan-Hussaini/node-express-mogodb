
exports.getPost=(req,res)=>{
  res.status(200).json({message:"get all post"})
};
exports.createPost=(req,res)=>{
    res.status(200).json({message:"Create post"})
  };
  exports.updatePost=(req,res)=>{
    res.status(200).json({message:"Update post"})
  };
  exports.deletePost=(req,res)=>{
    res.status(200).json({message:"delete post"})
  };
  exports.findPost=(req,res)=>{
    res.status(200).json({message:"Find post"})
  };
