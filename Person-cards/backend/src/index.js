const express = require('express')

import userRouter from './routes/user.router.js'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use('/users',userRouter)

app.listen(port, () =>{
  console.log(`Server working on ${port}`)
})