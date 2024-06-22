// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Using string type for user ID
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
