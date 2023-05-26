const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  firstName:{
    type: String,
    required: [true, "First Name is required!"],
    minLength: [2, "First Name has to have a minimum of 2 characters!"],
    maxLength: [30, "First Name cannot exceed 30 characters!"]
  },
  lastName:{
    type: String,
    minLength: [2, "Last Name has to have a minimum of 2 characters!"],
    maxLength: [30, "Last Name cannot exceed 30 characters!"]
  },
  favoriteTitle:{
    type: String,
    minLength: [2, "Title has to have a minimum of 2 characters!"]
  }
},{timestamps: true})

module.exports = mongoose.model("Author", AuthorSchema);