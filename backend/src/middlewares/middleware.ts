import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "../config";


export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"]

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(403).json({})
    }

    const token = authHeader?.split(" ")[1]

    try {
        const decoded = jwt.verify(token as string, JWT_SECRET)

        if ((decoded as JwtPayload).userId) {
            req.userId = (decoded as JwtPayload).userId
            next()
        } else {
            res.status(403).json({})
            return
        }

    } catch (error) {
        res.status(403).json({})
        return
    }

}