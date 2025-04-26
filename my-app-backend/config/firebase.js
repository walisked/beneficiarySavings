const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'your-firebase-db-url'
});

module.exports = admin;