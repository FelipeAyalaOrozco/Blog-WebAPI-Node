import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        minlength: 5 
    }
})

const User = mongoose.model('User', userSchema)

export default User