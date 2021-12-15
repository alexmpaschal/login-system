import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import flash from 'express-flash'
import session from 'express-session'
import methodOverride from 'method-override'
import Mongoose from 'mongoose'
import login from './routes/login.js'
import register from './routes/register.js'
import logout from './routes/logout.js'
import { checkAuthenticated } from './scripts/auth.js'
import initializePassport from './passport-config.js'

const app = express()

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const PORT = process.env.PORT || 3000

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    console.log('Connected to MongoDB database')
).catch((err) => 
    console.log(err)
)

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

app.use('/login', login)

app.use('/register', register)

app.use('/logout', logout)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})