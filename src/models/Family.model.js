const mongoose = require('mongoose');

const FamilySchema = mongoose.Schema({
  name: String,
  key: {type: String, unique: true},
});

module.exports = mongoose.model('Family', FamilySchema);
