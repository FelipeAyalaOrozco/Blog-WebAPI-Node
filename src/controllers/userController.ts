import { Router } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../repositories/userRepository'

export const userController = Router()

const checkToken = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, 'super-key-super-secret', (err, data) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            next()
        }
    })
}

userController.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await userRepository.findByEmailAndPassword(email, password)
    if (user) {
        jwt.sign({ email }, 'super-key-super-secret', (err, token) => {
            res.status(200).json({ token, message: 'OK' })
        })
    } else {
        res.status(404).json({ err : 'Not Found' })
    }
})

userController.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const user = await userRepository.findById(id)
    if (user) {
        res.status(200).json({ message: "OK", user })

    } else {
        res.status(404).json({ err : 'Not Found' })
    }
})

userController.delete('/:id', checkToken, async (req, res) => {
    const id = req.params.id
    const user = await userRepository.findByIdAndDelete(id)
    if (user) {
        res.status(200).json({ message: "OK" })

    } else {
        res.status(404).json({ err : 'Not Found' })
    }
})

userController.post('/', async (req, res) => {
    const user = await userRepository.saveUser(req.body)
    if (user) {
        res.status(200).json({ message: 'OK', user })
    } else {
        res.status(400).json({ err : 'Bad Request' })
    }
})