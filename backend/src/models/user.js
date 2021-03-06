import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    voice:{
        type: String,
    }}, {timestamps: true});

const User = model('User', UserSchema)
export default User
