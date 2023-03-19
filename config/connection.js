const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://Holden0212:goofyboy41632@cluster0.yyz89kv.mongodb.net/holdenssocialapi`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;