import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import winston from 'winston';

export default function (db) {
    passport.use(new LocalStrategy((username, password, cb) => {
        console.log('-------------------------------------')
        console.log(username);
        console.log(password);
        db.sequelize.query(`SELECT * FROM "User" WHERE "Username"=\'${ username }\'`)
            .then(result => {
                const rows = result[0];
                if (rows.length > 0) {
                    const first = rows[0]
                    // bcrypt.compare(password, first.password, function (err, res) {
                    // if (res) {
                    cb(null, { id: first.id, username: first.username, type: first.type })
                    // } else {
                    // cb(null, false)
                    // }
                    // });
                } else {
                    cb(null, false)
                }
            })
            .catch(err => {
                if (err) {
                    winston.error('Error when selecting user on login', err)
                    return cb(err)
                }
            });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        db.sequelize.query('SELECT id, "Username", "Type" FROM "User" WHERE id = 1')
            .then(results => {
                cb(null, results[1].rows[0])
            })
    })
}

