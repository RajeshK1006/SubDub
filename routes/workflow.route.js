import { Router } from "express"



const workflowRouter = Router();

workflowRouter.get("/",(req,res)=>{ res.send("This is workflow test endpoint")});

export default workflowRouter;