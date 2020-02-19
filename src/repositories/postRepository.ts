import Post from '../models/post'
import jwt from 'jsonwebtoken'
import Comment from '../models/comment'
import { postController } from '../controllers/postController'
import mongoose from 'mongoose'
import User from '../models/user'

const savePost = async (body, email) => {
    const author = User.findOne({email})
    const newPost = new Post({
        _id : new mongoose.Types.ObjectId(),
        title: body.title,
        date : body.date,
        author : (await author)._id,
        comments : [],
        totalComments: body.totalComments,
        content: body.content
    })

    return await newPost.save()
}
const commentPost = async (id, body, email) => {
    const post = Post.findById(id)
    const author = User.findOne({email})
    const newComment = new Comment({
        _id : new mongoose.Types.ObjectId(),
        comment: body.comment,
        author : (await author)._id,
        date : body.date,
    })
    post.update({comments: {newComment}}) 
    return await newComment.save()
}

const findByIdAndDelete = async (id) =>{
    return await Post.findByIdAndDelete(id)
}

const findById = async (id) =>{
    return await Post.findByIdAndDelete(id)
}

export default {
    savePost,
    findByIdAndDelete,
    findById,
    commentPost
}