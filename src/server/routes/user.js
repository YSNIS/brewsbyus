import bcrypt from 'bcryptjs';
import passport from 'passport';
import db from '../models';

export default function (app) {

    app.get('/user/logout', function (req, res) {
        req.logout();
        res.status(200).send({
            message: 'logged out'
        })
    });

    app.post('/user/login', passport.authenticate('local'), function (req, res) {
        const { user } = req
        req.session.save(function () {
            res.json(user)
        });
    });

    app.post('/user/register', function (req, res, next) {
        const newUser = req.body;
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) return next(err);
                newUser.password = hash; 
                newUser.type = "consumer";
                console.log(newUser);

                db.User.create(newUser);
            });
        });
        res.status(200).send({
            message: 'test'
        })
    });

    app.get('/user/getCurrent', function (req, res) {
        const { user } = req
        if (user) {
            res.json(user);
        } else {
            res.status(200).send({
                message: 'not signed in'
            })
        }
    });
}