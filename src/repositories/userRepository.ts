import User from '../models/user'
import mongoose from 'mongoose'

const findByEmailAndPassword = async (email, password) => {
    return await User.findOne({ email, password })
}

const findById = async (id) => {
    return await User.findById(id)
}

const findByIdAndDelete = async (id) => {
    return await User.findByIdAndDelete(id)
}

const saveUser = async (user) => {
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email: user.email,
        password: user.password
    })
    return await newUser.save()
}

export default {
    findByEmailAndPassword,
    findById,
    saveUser,
    findByIdAndDelete
}