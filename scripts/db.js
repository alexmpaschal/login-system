import mongoose from 'mongoose'

const SudoerSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    date :{
        type: Date,
        default: Date.now
    }
})

export const Sudoer = mongoose.model('User', SudoerSchema)