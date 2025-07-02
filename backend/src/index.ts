import express from "express"
import cors from "cors"
import { router as mainRouter } from "./routes/index"
const app = express();

declare global {
    namespace Express {
        interface Request {
            userId?: string
        }
    }
}
app.use(cors())
app.use(express.json());

app.use("/api/v1", mainRouter)

app.listen(3000, () => { console.log("server started") })