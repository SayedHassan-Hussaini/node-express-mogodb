
export const getUsers = (req, res) => {
  res.status(200).json({ status: "success", message: "Return all User" });
};
export const createUser = (req, res) => {
  console.log("User body.........", req);
  res.status(200).json(req.body);
};
export const deleteUser = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: "success",
    message: "Successfully Done.",
    data: { id: id },
  });
};
export const getSingleUser = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    status: "success",
    message: "Successfully Done.",
    data: { id: id },
  });
};
