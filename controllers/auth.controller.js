import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import jwt from"jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

export const signUp = async (req,res,next) => {
    //this is to make the  db trnasactiona atomic all or nothing protocol
    const session = await mongoose.startSession();
    session.startTransaction();

    try{

        //destruct the req to get the data of the user

        const { name, email, password } = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        //now hash the password before storing in the db;

        const salt = await bcrypt.genSalt(10) // radomizes the encrytion 

        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create([{name,email, password:hashedPassword}], {session});

        const token = jwt.sign({userId : newUser[0]._id }, JWT_SECRET, { expiresIn : JWT_EXPIRES_IN})

        await session.commitTransaction(); //once the transactions is complted commit thsoe changes to the db

        session.endSession();

        res.status(201).json({
            success : true,
            message : "User created successffully",
            data : {
                token, 
                user : newUser[0],     
            }
        })
    }
    catch(error){

        await session.abortTransaction() // if anything goes wrong in the try block abort the t ransaction immediately
        session.endSession();
        next(error);
    }
}

export const signIn = async (req,res,next) => {

    try{

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(!user){

            const error = new Error("User not found");
            error.statusCode = 404;
            throw error; 
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            const error = new Error('Invalid password');

            error.statusCode = 401;

            throw error;
        }

        const token = jwt.sign({ userId : user._id}, JWT_SECRET, {expiresIn : JWT_EXPIRES_IN});

        res.status(200).json({
            success: true,
            message: 'User signed in successfully',
            data: {
              token,
              user,
            }
          });
    }
    catch (error) {
        next(error);
      }

}

export const signOut = async (req,res,next) => {

}