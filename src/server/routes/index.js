import todosController from '../controllers/todos';
import path from 'path';

module.exports = (app) => {

  // API ROUTES
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);

  // Default CATCH-ALL
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

};