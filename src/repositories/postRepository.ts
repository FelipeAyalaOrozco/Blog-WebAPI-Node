import Post from '../models/post'
import { postController } from '../controllers/postController'

const savePost = async (post) => {
    let newPost = new Post(post)
    return await newPost.save()
}
export default {
    savePost
}