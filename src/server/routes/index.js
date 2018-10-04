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
    console.log('IS AUTH: ', req.isAuthenticated());
    console.log(req.session);
    console.log(req.cookie);
    console.log(req.user);
    res.status(200).send({
      message: 'Welcome to the beginning of nothingness.',
    })
  })


  // Mock Data Routes
  setMockRoutes(app);

  // User Routes
  app.get('/user/getCurrent', function(req, res) {
    const { user } = req    
    res.json(user);
  })

  app.get('/user/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.post('/api/login', passport.authenticate('local'), function (req, res) {

    const { user } = req
    console.log('IS AUTH: ', req.isAuthenticated());
    console.log(req.session);
    // console.log(req.cookie);
    // console.log(req.user);
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