import mongoose from 'mongoose'
import User from './user'
import Comment from './comment'

const postSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: String
    },
    author:{
        type: User
    },

    comments:[{
        type: Comment
    }],

    totalComments: {
        type: Number
    },
    content:{
        type: String
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post