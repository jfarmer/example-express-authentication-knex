let cookieSession = require('cookie-session');

if (!process.env.EXPRESS_SESSION_SECRET) {
  process.env.EXPRESS_SESSION_SECRET = 'this-is-a-bad-secret';
}

let sessionHandler = cookieSession({
  name: 'session',
  secret: process.env.EXPRESS_SESSION_SECRET,
});

module.exports = sessionHandler;
