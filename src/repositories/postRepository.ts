import Post from '../models/post'
import jwt from 'jsonwebtoken'
import Comment from '../models/comment'
import { postController } from '../controllers/postController'
import mongoose from 'mongoose'
import User from '../models/user'

const savePost = async (req) => {
    const email = jwt.decode(req.headers.authorization).payload.email
    const author = User.findOne({email})
    const newPost = new Post({
        _id : new mongoose.Types.ObjectId(),
        title: req.body.title,
        date : req.body.date,
        author : (await author)._id,
        comments : [],
        totalComments: req.body.totalComments,
        content: req.body.content
    })

    return await newPost.save()
}
const commentAPost = async (id, comment) => {
    const newComment = new Comment(comment)
    return await newComment.save()
}

export default {
    savePost
}