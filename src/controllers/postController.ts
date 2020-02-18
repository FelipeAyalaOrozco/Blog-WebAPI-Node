import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'

export const postController = Router()

const checkToken = (req, res, next) => {
    const token = req.headers['authorization']

    jwt.verify(token, 'super-key-super-secret', (err, data) => {
        if (err) {
            res.status(400).json({ err })
        } else {
            next()
        }
    })
}

postController.post('/:id/comment', checkToken, async (req, res) => {
    const id = req.params.id
    const post = await postRepository.commentAPost(id, req.body)
    if (post) {
        res.status(200).json({ post, message: "OK" })

    } else {
        res.status(404).json({ message: 'Bad request' })
    }
})