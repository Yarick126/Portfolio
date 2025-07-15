import { Router} from 'express'

import { createUser, deleteUser, getAllUsers, updateUser } from '../controllers/users.controller.js'

const userRouter = new Router()

userRouter.get('/',getAllUsers)
userRouter.post('/createUser',createUser)
userRouter.delete('/deleteUser/:id', deleteUser)
userRouter.patch('/updateUser/:id', updateUser)

export default userRouter