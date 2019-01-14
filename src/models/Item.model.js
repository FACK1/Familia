const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const Family = require('./Family.model.js');
// eslint-disable-next-line no-unused-vars
const User = require('./User.model.js');

const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
  title: String,
  status: Boolean,
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  family_id: { type: Schema.Types.ObjectId, ref: 'Family' },
});

module.exports = mongoose.model('User', UserSchema);
