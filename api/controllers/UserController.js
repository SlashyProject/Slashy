/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  login: function (req, res) {
    var bcrypt = require('bcrypt');

    User.findOneByEmail(req.body.email, function (err, user) {
      if (err) res.json({ error: 'DB error' }, 500);

      if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, match) {
          if (err) res.json({ error: 'Server error' }, 500);

          if (match) {
            // password match
            req.session.user = user.id;
            res.json(user);
          } else {
            // invalid password
            if (req.session.user) req.session.user = null;
            res.json({ error: 'Invalid password' }, 400);
          }
        });
      } else {
        res.json({ error: 'User not found' }, 404);
      }
    });
  },

	findAdult: function (req, res) {
		sails.log.debug("*******************finAdult");
		User.find({age: {'>=': 18}}).done(function (err, users) {
			  if (err) res.json({ error: 'oups error' }, 500);
				if (users) {res.json(users) }
				else { res.json({ message: 'User not found' });}
		});

	}

};
