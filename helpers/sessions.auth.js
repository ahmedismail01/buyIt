var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: process.env.CONNECTION_STRING,
    databaseName: 'buyItDB',
    collection: 'sessions'
  });

module.exports = session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store : store,
    cookie: { secure: false }
})