var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Data = require('../models/data');

router.post('/register', (req,res, next) => {
  console.log(req.body);
  if (req.body.email &&
    req.body.password &&
    req.body.firstName &&
    req.body.lastName) {

    var userData = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});
//POST route for updating data
router.post('/login', function (req, res, next) {

  if (req.body.loginEmail && req.body.loginPassword) {
    User.authenticate(req.body.loginEmail, req.body.loginPassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
  // 
  // console.log(process.env);
  // console.log('jeff');
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          return res.send('<h1>nobody is logged in</h1>')
          // var err = new Error('Not authorized! Go back!');
          // err.status = 400;
          // return next(err);
        } else {
          res.json(user);
        }
      }
    });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
