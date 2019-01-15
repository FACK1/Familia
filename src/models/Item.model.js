const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
  title: String,
  status: Boolean,
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  family_id: { type: Schema.Types.ObjectId, ref: 'Family' },
});

module.exports = mongoose.model('User', UserSchema);
