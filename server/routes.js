/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below

    // ROUTE INCLUDES BEGIN
  app.use('/api/loanforms', require('./api/loanform'));
  app.use('/api/loantypes', require('./api/loantype'));
  app.use('/api/renewaltypes', require('./api/renewaltype'));
  app.use('/api/members', require('./api/member'));
  app.use('/api/bureaus', require('./api/bureau'));
    // ROUTE INCLUDES END
      app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
































































