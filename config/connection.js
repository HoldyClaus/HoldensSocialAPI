const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://Holden0212:${process.env.MongoURI}.mongodb.net/holdenssocialapi`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;