const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Client = require('./database/model/clientModel');

module.exports = (passport) => {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Client.findById(id, function(err, client) {
      done(err, client);
    });
  });

  passport.use('local-signup', 
    new LocalStrategy({
    // by default, local strategy uses Clientname and password, we will override with email
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      process.nextTick(function() {
          // find a Client whose email is the same as the forms email
          // we are checking to see if the Client trying to login already exists
        Client.findOne({ 'local.email' :  email }, function(err, client) {
          console.log('LOOKING THRU DATABASE')
          // if there are any errors, return the error
          if (err) return done(err);
          // check to see if theres already a Client with that email
          if (client) {
            return done(null, false);
          } else {
            // if there is no Client with that email
            // create the Client
            var newClient = new Client();
            // set the Client's local credentials
            newClient.local.email = email;
            newClient.local.password = newClient.generateHash(password); 
            // save the Client
            newClient.save(function(err) {
                if (err)
                    throw err;
                return done(null, newClient);
            });
          }
        });    
      });
    })
  );
  passport.use('local-login', 
    new LocalStrategy({
    // by default, local strategy uses Clientname and password, we will override with email
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      process.nextTick(function() {
          // find a Client whose email is the same as the forms email
          // we are checking to see if the Client trying to login already exists
        Client.findOne({ 'local.email' :  email }, function(err, client) {
          // if there are any errors, return the error
          if (err) return done(err);
            // if no user is found, return the message
          if (!client) return done(null, false); // req.flash is the way to set flashdata using connect-flash
            // if the user is found but the password is wrong
          if (!client.validPassword(password)) return done(null, false); // create the loginMessage and save it to session as flashdata
            // all is well, return successful user
          return done(null, user);
        });    
      });
    })
  );
};
