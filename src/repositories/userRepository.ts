import User from '../models/user'

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

export default {
    findByEmailAndPassword,
    findById,
    saveUser
}