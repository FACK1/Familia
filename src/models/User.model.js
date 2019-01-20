const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
  name: String,
  username: { type: String, unique: true, index: true },
  password: String,
  family_id: { type: Schema.Types.ObjectId, ref: 'Family' },
});

module.exports = mongoose.model('User', UserSchema);
