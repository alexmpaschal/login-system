import express from 'express'
const router = express.Router()

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

export default router