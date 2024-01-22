import express from "express"
import morgan from "morgan"
import userRouters from "./routers/userRouters.js"
import postRouters from "./routers/postRouters.js"

const app = express();
app.use(express.json());
if(process.env.NODE_ENV="development"){
    app.use(morgan("dev"))
}



// route
app.use('/api/v1/posts',postRouters)
app.use('/api/v1/users',userRouters)

export default app
