import mongoose from 'mongoose'
import User from "./user"

const commentSchema = new mongoose.Schema({
    id: {
        type: String
    },
    comment: {
        type: String
    },
    author:{
        type: User
    },
    date: {
        type: String 
    } 
    

})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment