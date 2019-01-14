const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const Family = require('./Family.model.js');

const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
  name: String,
  family_id: { type: Schema.Types.ObjectId, ref: 'Family' },
});

module.exports = mongoose.model('User', UserSchema);
