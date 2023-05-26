const Author = require("../models/author.model")

module.exports = {

  // CREATE
  createAuthor: (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.status(201).json(newAuthor))
    .catch(err => res.status(400).json(err));
  },

  // READ
  getAll: (req, res) => {
    Author.find({})
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.status(400).json({msg: "COULD NOT GET ALL--->", err}));
  },

  getOne: (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.status(400).json({msg: "COULD NOT GET ONE--->", err}));
  },

  // UPDATE
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate ({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedAuthor => res.status(202).json(updatedAuthor))
    .catch(err=> res.status(400).json({msg: "COULD NOT UPDATE--->", err}));
  },

  // DELETE
  destroyAuthor: (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
    .then(deleteAuthor => res.status(202).json(deleteAuthor))
    .catch(err => res.status(400).json({msg: "COULD NOT DELETE--->", err}));
  }
}