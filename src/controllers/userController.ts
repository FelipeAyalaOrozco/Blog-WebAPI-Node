import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const userController = Router()

userController.post('/login', async(req, res) => {
    const {email, password} = req.body

    const student = await userRepository.findByEmailAndPassword(email, password)

    if(student){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token})
        } )
    }else{
        res.status(404).json({message: 'NOT FOUNd'})
    }

})