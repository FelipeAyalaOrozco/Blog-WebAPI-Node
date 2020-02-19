import mongoose, { Schema } from 'mongoose'

export interface IPost extends mongoose.Document {
    tittle: string
    date: Date,
    author: any,
    comments: [any]
    totalComments: number
}


const commentSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    comment: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    date: String
})

export const Comment = mongoose.model('Comment', commentSchema)

