import Post from '../models/post'
import Comment from '../models/comment'
import { postController } from '../controllers/postController'

<<<<<<< HEAD
const savePost = async (post) => {
    let newPost = new Post(post)
    return await newPost.save()
}
=======
const commentAPost = async (id, comment) => {
    const newComment = new Comment(comment)
    return await newComment.save()
}

>>>>>>> bae977bcad2534730d04dd6ffcf6a8b11ce41d68
export default {
    savePost
}