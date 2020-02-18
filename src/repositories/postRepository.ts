import Post from '../models/post'
import Comment from '../models/comment'
import { postController } from '../controllers/postController'
import mongoose from 'mongoose'

const savePost = async (post) => {
    let newPost = new Post({
        _id : new mongoose.Types.ObjectId(),
        title: post.title,
        date : post.date,
        author : new mongoose.Types.ObjectId(),
        comments : [],
        totalComments: post.totalComments,
        content: post.content


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