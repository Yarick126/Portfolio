import { Router} from 'express'

import { createUser, getAllUsers } from '../controllers/users.controller.js'

const userRouter = new Router()

userRouter.get('/',getAllUsers)
userRouter.post('/createUser',createUser)

export default userRouter