import express from 'express'
import cors from 'cors'
import authRouter from './routers/authRoutes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/auth",authRouter)
app.listen(process.env.PORT,() => {
    console.log("server is running")
})