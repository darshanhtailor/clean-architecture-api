import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    createdOn:{
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

export default User