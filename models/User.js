// We don't want to store raw passwords in the database.
// We also don't want to "encrypt" passwords, which implies
// we have the power to decrypt/recover them. The solution is
// something called "hashing" or "password hashing". BCrypt
// is a hashing algorithm.
//
// See:
//   https://auth0.com/blog/hashing-passwords-one-way-road-to-security/
let bcrypt = require('bcrypt');

let db = require('../lib/database');

let BCRYPT_SALT_ROUNDS = 10;

let User = {
  findById: function(id) {
    return db('users').select('*').where('id', id).first();
  },

  findByEmail: function(email) {
    return db('users').select('*').where('email', email).first();
  },

  create: async function(userData) {
    // If userData contains a password property, create a password
    // digest w/ bcrypt and pass that to the database, instead.
    if (userData.password) {
      let password = userData.password;
      delete userData.password;

      userData.password_digest = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    }

    return db('users').insert(userData);
  },

  verifyPassword: async function(email, suppliedPassword) {
    let user = await User.findByEmail(email);

    if (user) {
      if (await bcrypt.compare(suppliedPassword, user.password_digest)) {
        return user;
      }
    }
  },
};

module.exports = User;
