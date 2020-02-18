import User from '../models/user'
import { userController } from '../controllers/userController'

const findByEmailAndPassword = async (email, password) => {
    return await User.findOne({email, password})
}

const findById = async (id) => {
    return await User.findById(id)
}

const saveUser = async (user) => {
    let newUser = new User(user)
    return await newUser.save()
}

const findByIdAndDelete = async (id) =>{
    return await User.findByIdAndDelete(id)
}

export default {
    findByEmailAndPassword,
    findById,
    saveUser,
    findByIdAndDelete
}