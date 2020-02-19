import Post from '../models/post'
import { Comment } from '../models/comment'
import { IPost } from '../models/post'
import mongoose from 'mongoose'
import User from '../models/user'

const savePost = async (body, email) => {
    const author = User.findOne({ email })
    const newPost = new Post({
        _id: new mongoose.Types.ObjectId(),
        title: body.title,
        date: body.date,
        author: (await author)._id,
        comments: [],
        totalComments: body.totalComments,
        content: body.content
    })

    return await newPost.save()
}

const findById = async (id) => {
    return await Post.findById(id)
}

const modifyPost = async (id, body) => {
    const post: IPost = (await findById(id)) as IPost
    post.title = body.title
    post.content = body.content
    return await post.save()
}

const findByIdAndDelete = async (id) => {
    return await Post.findByIdAndDelete(id)
}

const commentPost = async (id, body, email) => {
    const post: IPost = (await findById(id)) as IPost
    // const post = Post.findById(id)
    const author = User.findOne({ email })
    const newComment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        comment: body.comment,
        author: (await author)._id,
        date: body.date,
    })
    post.comments.push(newComment)
    post.totalComments += 1
    newComment.save()
    return await post.save()
}

export default {
    savePost,
    modifyPost,
    findByIdAndDelete,
    findById,
    commentPost
}