import todosController from '../controllers/todos';
import path from 'path';
import setMockRoutes from './mock';
import passport from 'passport';

module.exports = (app) => {

  // Test Routes
  app.get('/api', (req, res) => {
    res.status(200).send({
      message: 'Welcome to the Todos API!',
    });
  });
  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/test', (req, res) => {
    res.status(200).send({
      message: 'Welcome to the beginning of nothingness.',
    })
  })


  // Mock Data Routes
  setMockRoutes(app);

  // User Routes
  app.get('/user/getCurrent', function (req, res) {
    const { user } = req
    if (user) {
      res.json(user);
    } else {
      res.status(200).send({
        message: 'not signed in'
      })
    }
  })

  app.get('/user/logout', function (req, res) {
    req.logout();
    res.status(200).send({
      message: 'logged out'
    })
  });

  app.post('/api/login', passport.authenticate('local'), function (req, res) {

    const { user } = req

    req.session.save(function () {
      res.json(user)
    });
  })

  // Default CATCH-ALL
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

};