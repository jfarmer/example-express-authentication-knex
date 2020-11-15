let User = require('./User');
let debug = require('debug')('express-app:auth');

async function loadUser(req, res, next) {
  let userId = req.session.userId;

  if (userId) {
    req.user = await User.findById(userId);
    debug('Authenticated as:', req.user.email);
  }

  next();
}

module.exports = loadUser;
