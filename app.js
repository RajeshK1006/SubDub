import express from "express"
import { port } from "./config/env.js"
import  userRouter  from "./routes/user.route.js"
import subscriptionRouter from "./routes/subscription.route.js"
import authRouter from "./routes/auth.route.js"


const app = express()

app.get("/",(req,res) => res.send("THis is an hoome page"))

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


console.log(port)

app.listen(port, () => {console.log(`Server running on the port ${port} on http://localhost:${port}`)})