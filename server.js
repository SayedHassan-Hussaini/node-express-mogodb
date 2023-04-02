const app=require('./app')
const port = 5000;
app.listen(port, () => {
  console.log(`Server is ready to port ${port}....`);
});