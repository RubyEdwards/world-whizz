import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    hash_password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.method({
  async authenticate(password) {
    return bcrypt.compare(password, this.hash_password);
  },
});

export default mongoose.model('User', userSchema);
