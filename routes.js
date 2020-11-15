let Router = require('express-promise-router');

// Uncomment this if you want access to the database in this file
// let db = require('./database');

let router = new Router();

router.get('/', async(request, response) => {
  response.render('index', { title: 'Express Demo' });
});

module.exports = router;
