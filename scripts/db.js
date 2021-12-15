import Mongoose from 'mongoose'

const SudoerSchema = new Mongoose.Schema({
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

export const Sudoer = Mongoose.model('User', SudoerSchema)