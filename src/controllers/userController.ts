import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const userController = Router()

userController.post('/login', async(req, res) => { const {email, password} = req.body

    const user = await userRepository.findByEmailAndPassword(email, password)
    if(user){
        jwt.sign( {email} , 'super-key-super-secret' , (err, token) => {
            res.status(200).json({token, message:'OK'})
        } )
    }else{
        res.status(404).json({message: 'Not found'})
    }
})

userController.post('/', async(req, res) => {
    const user = await userRepository.saveUser(req.body)
    if(user) {
        res.status(200).json({ user })
    }else{
        res.status(400).json({ err: 'Something is wrong with request' })
    }

})

