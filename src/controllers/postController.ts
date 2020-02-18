import { Router } from 'express'
import jwt from 'jsonwebtoken'
import postRepository from '../repositories/postRepository'

export const postController = Router()

const checkToken = (req, res, next) => {
    const token = req.headers['authorization']

    jwt.verify(token, 'super-key-super-secret', (err, data)=> {
        if(err){
            res.status(400).json({err})
        }else{
            next()
        }
    })

}

postController.post('/',  checkToken, async(req, res) => {
    const decodedToken = jwt.decode(req.headers['authorization'])
    const post = await postRepository.savePost(req.body, decodedToken.email)
    if(post) {
        res.status(200).json({ message:'OK', post })
    }else{
        res.status(400).json({ message: 'bad request', post })
    }

})

postController.delete('/:id', checkToken,  async (req, res) => {
    const id = req.params.id
    const post = await postRepository.findByIdAndDelete(id)
    if(post){
        res.status(200).json({post, message: "OK"})

    }else{
        res.status(404).json({ message: 'post not found' })
    }
})