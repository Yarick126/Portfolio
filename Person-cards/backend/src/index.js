import express from 'express'
import userRouter from './routes/user.router.js'
import cors from 'cors'
import { errorHandler } from './middleware/error-handler.js'


const app = express()
const port = process.env.PORT || 3001

app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST','PATCH', 'DELETE'],
  allowedHeaders: 'Content-type'
}))
app.use(express.json())
app.use('/users',userRouter)

app.use(errorHandler)

app.listen(port, () =>{
  console.log(`Server working on ${port}`)
})