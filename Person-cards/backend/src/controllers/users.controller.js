import {PrismaClient} from '../../generated/prisma/client.js'

const userClient = new PrismaClient().user
const prisma = new PrismaClient()
// getAll users

export const getAllUsers = async(req, res) => {
  try {
    const users = await userClient.findMany()
    res.status(200).json(users)
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
export async function updateUser(req, res) {
  try {
    const { name, surname, age, sex, bio,imgSrc } = req.body
    const newUser = await userClient.update({
      where:{
        id: +req.params.id
      },
      data: {
        name: name,
        sex: sex,
        surname: surname,
        age: age,
        imgSrc: imgSrc,
        bio: bio
      }
    })
    res.status(200).json({data: newUser})
  } catch (error) {
    console.log(error.message);
    await prisma.$disconnect()
  }
}
// delete user

export const deleteUser= async (req, res)=>{
  try {
    console.log(+req.params.id);
    
    const user = await userClient.findUnique({
      where: {
        id: +req.params.id
      }
    })
    if(!user){
      throw new Error('User do not exist')
    }
    await userClient.delete({
      where: {
        id: +req.params.id 
      }
    })
    res.status(200).json({message: 'User sucessfuly deleted'})
  } catch (error) {
    console.log(error);
    await prisma.$disconnect()
  }
}
