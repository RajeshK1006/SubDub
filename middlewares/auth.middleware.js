import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authorize = async (req, res, next) => {
    try {
        let token;

        // ✅ Fixing typos and checking headers correctly
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Unauthorized", error: "Token not provided" });
        }

        // ✅ Verifying the JWT Token
        const decoded = jwt.verify(token, JWT_SECRET);

        // ✅ Finding user in database
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized", error: "User not found" });
        }

        req.user = user; // Attach user data to the request object
        next(); // Move to the next middleware

    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};

export default authorize;
