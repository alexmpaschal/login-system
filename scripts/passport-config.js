import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'
import { Sudoer } from './db.js'

function initialize(passport) {
	passport.use(
		new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			Sudoer.findOne({ email: email })
			.then((user) => {
				if (!user) {
					return done(null, false, { message: 'Email not registered' })	
				}
				bcrypt.compare(password, user.password, (err, isMatch) => {
					if (err) throw err
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false, { message: 'Password incorrect' })
					}
				})
			})
			.catch((err) => { console.log(err) })
		})
	)
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	})
	passport.deserializeUser(function(id, done) {
		Sudoer.findById(id, function(err, user) {
			done(err, user)
		})
	})
}

export default initialize