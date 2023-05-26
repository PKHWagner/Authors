const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/authors_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database is locked and ready to be loaded"))
  .catch(err => console.log("Something went wrong when connecting to the database", err));