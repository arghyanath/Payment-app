import express from "express"
import { Account } from "../db"

import { authMiddleware } from "../middlewares/middleware"
import mongoose from "mongoose"
export const accountRouter = express.Router()

accountRouter.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({ userId: req.userId })

    if (!account) {
        res.status(400).json({})
        return
    }
    res.json({ balance: account.balance })

})

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;
    const session = await mongoose.startSession()

    session.startTransaction();

    const account = await Account.findOne({ userId: req.userId }).session(session)
    if (!account || account.balance < amount) {
        await session.abortTransaction()
        res.status(411).json({ msg: "Insufficient balance" })
        return
    }

    const toAccount = await Account.findOne({ userId: to }).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        res.status(404).json({ msg: "Invalid account" })
        return
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session)
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session)

    await session.commitTransaction()

    res.json({
        msg: "payment successfull"
    })

})