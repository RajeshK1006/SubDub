import { Router } from 'express';
import { title } from 'process';

const userRouter = Router();

userRouter.get('/', (req,res) => res.send({title:"get the users"}));

userRouter.get('/:id', (req,res) => res.send({title:"GET ALL THE DETAILS OF PARTICULAR USER"}));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;