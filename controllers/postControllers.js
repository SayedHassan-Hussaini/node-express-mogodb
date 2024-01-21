export const getPosts = (req, res) => {
  res.status(200).json({ status: "success", message: "Return all post" });
};
export const createPost = (req, res) => {
  console.log("post body.........", req);
  res.status(200).json(req.body);
};
export const deletePost = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: "success",
    message: "Successfully Done.",
    data: { id: id },
  });
};
export const getSinglePost = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: "success",
    message: "Successfully Done.",
    data: { id: id },
  });
};
