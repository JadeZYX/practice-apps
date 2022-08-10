var db = require('./db.js');

module.exports = {
  getAll: function (callback) {
    return db.Words.find({})
      .then((data) => callback(null, data))
      .catch((err) => callback(err));
  },

  search: function (text, callback) {
    // console.log(text);
    return db.Words.find({ term: text })
      .then((data) => callback(null, data))
      .catch((err) => callback(err));
  },

  createNewData: function (newTerm, callback) {
    // console.log("Add test:"+ JSON.stringify(newTerm));
    return db.Words.create(newTerm)
      .then((data) => callback(null, data))
      .catch((err) => callback(err));
  },

  deleteData: function (term, callback) {
    return db.Words.deleteOne(term)
      .then((term) => callback(null, term))
      .catch((err) => callback(err));
  },

  updateList: function (id, term, definition, callback) {
    return db.Words.updateMany(
      { _id: id },
      { $set: { term: term, definition: definition } })
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
  }

};