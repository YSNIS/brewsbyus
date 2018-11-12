import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";
import winston from "winston";

export default function(db) {
  // Authorizing user
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      (email, password, cb) => {
        db.sequelize
          .query(`SELECT * FROM "Users" WHERE "email"=\'${email}\'`)
          .then(result => {
            const rows = result[0];
            if (rows.length > 0) {
              const first = rows[0];
              bcrypt.compare(password, first.password, function(err, res) {
                if (res) {
                  cb(null, {
                    id: first.id,
                    email: first.email,
                    type: first.type
                  });
                } else {
                  cb(null, false);
                }
              });
            } else {
              cb(null, false);
            }
          })
          .catch(err => {
            if (err) {
              winston.error("Error when selecting user on login", err);
              return cb(err);
            }
          });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    db.sequelize
      .query(`SELECT id, "email", "type" FROM "Users" WHERE id = ${id}`)
      .then(results => {
        console.log("sup");
        cb(null, results[1].rows[0]);
      });
  });
}
