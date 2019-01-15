const mongoose = require('mongoose');

const FamilySchema = mongoose.Schema({
  name: String,
  key: String,
});

module.exports = mongoose.model('Family', FamilySchema);
