import User from '../models/user'
import { userController } from '../controllers/userController'
import mongoose from 'mongoose'

const findByEmailAndPassword = async (email, password) => {
    return await User.findOne({email, password})
}

const findById = async (id) => {
    return await User.findById(id)
}

const saveUser = async (user) => {
    const newUser = new User({
        _id : new mongoose.Types.ObjectId(),
        email : user.email,
        password : user.password
    })
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