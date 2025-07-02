import express from "express"
import { Account, UserModel } from "../db"
import z from "zod"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"
import { authMiddleware } from "../middlewares/middleware"
export const userRouter = express.Router()

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string()
})

const updateSchema = z.object({
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string()
})

userRouter.post("/signup", async (req, res) => {
    const body = req.body
    const { success } = signupSchema.safeParse(body)

    if (!success) {
        res.status(411).json({ msg: "Incorrect Input" })
        return
    }
    const user = await UserModel.findOne({ username: body.username })
    if (user && user._id) {
        res.status(411).json({ msg: "Email already taken" })
        return
    }

    const dbuser = await UserModel.create(body)

    await Account.create({
        userId: dbuser._id,
        balance: Math.floor(Math.random() * (10000 - 1 + 1)) + 1
    })

    res.json({
        msg: " user created successfully",
    })


})

userRouter.post("/signin", async (req, res) => {
    const user = await UserModel.findOne({ username: req.body.username, password: req.body.password })

    if (user && user._id) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })

    } else {
        res.status(411).json("invalid credentials")
    }



})

userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body)

    if (!success) {
        res.status(411).json({ msg: "Error waile updating information" })
        return
    }

    await UserModel.updateOne({ _id: req.userId }, req.body)

    res.json({ msg: " Updated successfully" })
})

userRouter.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.body.filter || "";

    const user = await UserModel.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }
        ]
    })

    res.json({
        users: user.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})