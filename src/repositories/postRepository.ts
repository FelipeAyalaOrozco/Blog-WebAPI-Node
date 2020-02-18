import Post from '../models/post'
import Comment from '../models/comment'
import { postController } from '../controllers/postController'

const commentAPost = async (id, comment) => {
    const newComment = new Comment(comment)
    return await newComment.save()
}

export default {
}