import {PrismaClient} from '../../generated/prisma/client.js'

const userClient = new PrismaClient().user

// getAll users

export const getAllUsers = async(req, res) => {
  try {
    const users = await userClient.findMany()
    res.status(200).json({data: users})
  } catch (e) {
    console.log(e);
  }
} 

// create user

export const createUser = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    
  }
}

// update user

// delete user


