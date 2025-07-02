import mongoose, { model, Schema, Types } from "mongoose";
import { MONGODB_URL } from "./config";

mongoose.connect(MONGODB_URL)

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
})

export const UserModel = model("User", UserSchema)

const AccountSchema = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    balance: { type: Number, required: true }
})

export const Account = model("Account", AccountSchema)