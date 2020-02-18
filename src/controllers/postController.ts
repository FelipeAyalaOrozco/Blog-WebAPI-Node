import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'

export const postController = Router()

postController.post('/', async(req, res) => {
    const post = await postRepository.savePost(req.body)
    if(post) {
        res.status(200).json({ message:'OK' })
    }else{
        res.status(400).json({ message: 'bad request' })
    }

})