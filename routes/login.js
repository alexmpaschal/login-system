import express from 'express'
import { checkNotAuthenticated } from '../scripts/auth.js'
import passport from 'passport'
const router = express.Router()

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})
  
router.post('/login', checkNotAuthenticated, 
passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

export default router