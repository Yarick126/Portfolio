import { Router} from 'express'

import { getAllUsers } from '../controllers/users.controller.js'

const userRouter = new Router()

userRouter('/',getAllUsers)

export default userRouter