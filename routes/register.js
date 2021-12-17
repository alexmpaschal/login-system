import express from 'express'
import { checkNotAuthenticated } from '../scripts/auth.js'
import bcrypt from 'bcrypt'
import { User } from '../scripts/db.js'

const router = express.Router()

router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

router.post('/register', checkNotAuthenticated, async (req, res) => {
    const { name, email, password } = req.body
    
    User.findOne({ email: email })
    .then(async (user) => {
        if (user) {
            const emailRegisteredError = { message: "Email already registered" }
            res.render('register.ejs', { emailRegisteredError, name, email, password })
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword
            })
            newUser.save()
    
            res.redirect('/login')
        }
    })
})

export default router