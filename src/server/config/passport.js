import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import winston from 'winston';

export default function (db) {
    passport.use(new LocalStrategy((username, password, cb) => {
        console.log(username);
        console.log(password);
        db.sequelize.query('SELECT * FROM "Users" WHERE username=\'jfleish1\'')
            .then(result => {
                // console.log(result);
                const rows = result[0];
                console.log(rows);
                if (rows.length > 0) {
                    console.log("FINDING USER");
                    const first = rows[0]
                    // bcrypt.compare(password, first.password, function (err, res) {
                    // if (res) {
                    cb(null, { id: first.id, username: first.username, type: first.type })
                    // } else {
                    // cb(null, false)
                    // }
                    // });
                } else {
                    console.log("Couldn't Find User");
                    cb(null, false)
                }
            })
            .catch(err => {
                if (err) {
                    console.log("ERROR");
                    winston.error('Error when selecting user on login', err)
                    return cb(err)
                }
            });
    }));

    passport.serializeUser((user, done) => {
        console.log('SERIALIZING')
        done(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        console.log('DESERIALIZING')
        db.sequelize.query('SELECT id, username, type FROM "Users" WHERE id = 1')
            .then(results => {
                console.log('GETTING RESULTS')
                console.log(results[1].rows[0].id);
                cb(null, results[1].rows[0])
            })
    })
}

