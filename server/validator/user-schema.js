import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
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
    travelJournal: {
      type: Array,
      default: [
        {
          andorra: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          austria: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          belgium: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          denmark: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          finland: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          france: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          germany: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          greece: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          iceland: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          ireland: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          italy: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          liechtenstein: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          luxembourg: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          malta: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          monaco: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          netherlands: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          norway: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          portugal: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          sanMarino: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          spain: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          sweden: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          switzerland: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          turkey: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
        {
          unitedKingdom: {
            isComplete: false,
            isQ1Correct: false,
            isQ2Correct: false,
            isQ3Correct: false,
            isQ4Correct: false,
            isQ5Correct: false,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

userSchema.method({
  async authenticate(password) {
    return bcrypt.compare(password, this.hash_password);
  },
});

export default mongoose.model('User', userSchema, 'users');
