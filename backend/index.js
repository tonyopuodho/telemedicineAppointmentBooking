import express from 'express'
import cors from 'cors'
import authRouter from './routers/authRoutes.js'
import userRoutes from './routers/userRoutes.js'
import userActionRoutes from './routers/userActionRoutes.js'
import doctorRoutes from './routers/doctorRoutes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()

dotenv.config()
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin:'http://localhost:5173',
    methods:["POST","GET","DELETE","PUT"],
    credentials: true
}))
app.use(cookieParser())
app.use(session({
    secret:process.env.SESSION_SECRETE,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 //set cookie to expire after one day
    }
}))

app.use("/auth",authRouter)
app.use("/auth",userRoutes)
app.use("/action",userActionRoutes)
app.use("/api",doctorRoutes)

app.listen(process.env.PORT,() => {
    console.log("server is running")
})