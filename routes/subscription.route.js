import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscriptionn, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/",(req,res) => res.status(200).send({title: "GET ALL SUBSCRIPTIONS"}));

subscriptionRouter.get("/:id",(req,res) => res.status(200).send({title: "GET ALL SUBSCRIPTION details of an user"}));

subscriptionRouter.post("/",authorize, createSubscriptionn);

subscriptionRouter.put("/:id",(req,res) => res.status(200).send({title: "update the SUBSCRIPTION of the user"}));

subscriptionRouter.delete("/:id",(req,res) => res.status(200).send({title: "Delete SUBSCRIPTION of the user"}));

subscriptionRouter.get("/user/:id",authorize,getUserSubscriptions);

subscriptionRouter.put("/:id/cancel",(req,res) => res.status(200).send({title: "Cancel SUBSCRIPTIONS"}));

subscriptionRouter.get("/upcoming-renewals",(req,res) => res.status(200).send({title: "GET upcoming SUBSCRIPTIONS"}));


export default subscriptionRouter;