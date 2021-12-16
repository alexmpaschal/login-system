import express from 'express'
import { checkNotAuthenticated } from '../scripts/auth.js'
import bcrypt from 'bcrypt'
import { Sudoer } from '../scripts/db.js'

const router = express.Router()

router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})
  
router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const newSudoer = new Sudoer({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        newSudoer.save()

        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

export default router