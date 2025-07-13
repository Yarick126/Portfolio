import {PrismaClient} from '../../generated/prisma/client.js'

const userClient = new PrismaClient().user
const prisma = new PrismaClient()
// getAll users

export const getAllUsers = async(req, res) => {
  try {
    const users = await userClient.findMany()
    res.status(200).json({data: users})
  } catch (e) {
    console.log(e);
    await prisma.$disconnect()
  }
} 

// create user

export const createUser = async (req, res) => {
  try {
    
    const userData = req.body
    
    const user = await userClient.create(
      {
        data:userData
      })

    res.status(201).json({data: user})
  } catch (e) {
    console.log(e);
    await prisma.$disconnect()
  }
}

// update user

// delete user


