import {PrismaClient} from '../../generated/prisma/client.js'
import asyncHandler from 'express-async-handler'
import createErrors from 'http-errors'

const userClient = new PrismaClient().user
// getAll users

export const getAllUsers = asyncHandler(
  async(req, res, next) => {
    const users = await userClient.findMany()
    res.status(200).json(users)
  }
) 

// create user

export const createUser = asyncHandler(
  async (req, res) => {

  const userData = req.body
  console.log(req.body);
  
  const newUser = await userClient.create(
    {
      data:{
        name: userData.name,
        surname: userData.surname,
        sex: userData.sex,
        age: userData.age,
        imgSrc: userData.imgSrc,
        bio: userData.bio
      }
    })
  if(!newUser) throw createErrors(400, 'Cant create user, check your input data')
  res.status(201).json({newUser})
  }
) 

// update user
export const updateUser = asyncHandler(
  async (req, res, next) => {
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
    next()
  }

)
// delete user

export const deleteUser= asyncHandler(
  async (req, res)=>{
    const user = await userClient.findUnique({
      where: {
        id: +req.params.id
      }
    })
    if(!user) throw createErrors(400,'User not found')
    await userClient.delete({
      where: {
        id: +req.params.id 
      }
    })
    res.status(200).json({message: 'User successfully deleted'})})
