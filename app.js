import express from "express"
import { port } from "./config/env.js"
import  userRouter  from "./routes/user.route.js"
import subscriptionRouter from "./routes/subscription.route.js"
import authRouter from "./routes/auth.route.js"
import connectToDatabase from "./database/mongodb.js"
import { NODE_ENV } from "./config/env.js"
import errorMiddleware from './middlewares/error.middleware.js'
import cookieParser from "cookie-parser"
import arcjetMiddleware from "./middlewares/arjet.middleware.js"
import workflowRouter from "./routes/workflow.route.js"

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(arcjetMiddleware);


app.get("/",(req,res) => res.send("THis is an hoome page"))

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

app.subscribe(errorMiddleware);


console.log(port)

app.listen(port, async () => {
    
    console.log(`Server running on the port ${port} on http://localhost:${port}`);
    await connectToDatabase();
    console.log(`connected to database in this ${NODE_ENV} mode.`);

})