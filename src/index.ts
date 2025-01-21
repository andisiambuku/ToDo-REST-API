import express, {Request, Response} from "express"
import cors from "cors"
const app = express()
const port = process.env.PORT
app.use(cors())


app.get("/", (req: Request, res:Response) =>{
    res.json({message: "Hello World"})
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})