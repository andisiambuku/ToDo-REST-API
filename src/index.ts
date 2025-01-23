import express, {Request, Response} from "express"
import cors from "cors"
import { connectDB } from "../config/db"
import router from "./routes/toDoRoutes"



const app = express()
const port = process.env.PORT
app.use(cors())

connectDB()

//Middleware for proper json parsing
app.use(express.json())

//Routes
app.use(router)

app.get("/api/health", (req: Request, res:Response) =>{
    res.json({message: `Server is running on ${port}`})
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})