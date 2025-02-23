import { config  } from "dotenv";

config( {path : `.env.${process.env.NODE_ENV || "development.local"}`})

export const {port, NODE_ENV, DB_URI,JWT_SECRET, JWT_EXPIRES_IN, ARCJECT_ENV, ARCJECT_KEY } = process.env;