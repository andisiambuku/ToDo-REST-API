import express, {Request, Response} from "express"

const app = express()
const port = process.env.PORT


app.get("/", (req: Request, res:Response) =>{
    res.json({message: "Hello World"})
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`)
})