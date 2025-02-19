import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/",(req,res) => res.status(200).send({title: "GET ALL SUBSCRIPTIONS"}));

subscriptionRouter.get("/:id",(req,res) => res.status(200).send({title: "GET ALL SUBSCRIPTION details of an user"}));

subscriptionRouter.post("/",(req,res) => res.status(200).send({title: "CREATE SUBSCRIPTIONS"}));

subscriptionRouter.put("/:id",(req,res) => res.status(200).send({title: "update the SUBSCRIPTION of the user"}));

subscriptionRouter.delete("/:id",(req,res) => res.status(200).send({title: "Delete SUBSCRIPTION of the user"}));

subscriptionRouter.get("/user/:id",(req,res) => res.status(200).send({title: "GET ALL user SUBSCRIPTION"}));

subscriptionRouter.put("/:id/cancel",(req,res) => res.status(200).send({title: "Cancel SUBSCRIPTIONS"}));

subscriptionRouter.get("/upcoming-renewals",(req,res) => res.status(200).send({title: "GET upcoming SUBSCRIPTIONS"}));


export default subscriptionRouter;