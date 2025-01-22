import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

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
          countryname: "andorra",
          isComplete: false,
        },
        {
          countryname: "austria",
          isComplete: false,
        },
        {
          countryname: "belgium",
          isComplete: false,
        },
        {
          countryname: "denmark",
          isComplete: false,
        },
        {
          countryname: "finland",
          isComplete: false,
        },
        {
          countryname: "france",
          isComplete: false,
        },
        {
          countryname: "germany",
          isComplete: false,
        },
        {
          countryname: "greece",
          isComplete: false,
        },
        {
          countryname: "iceland",
          isComplete: false,
        },
        {
          countryname: "ireland",
          isComplete: false,
        },
        {
          countryname: "italy",
          isComplete: false,
        },
        {
          countryname: "liechtenstein",
          isComplete: false,
        },
        {
          countryname: "luxembourg",
          isComplete: false,
        },
        {
          countryname: "malta",
          isComplete: false,
        },
        {
          countryname: "monaco",
          isComplete: false,
        },
        {
          countryname: "netherlands",
          isComplete: false,
        },
        {
          countryname: "norway",
          isComplete: false,
        },
        {
          countryname: "portugal",
          isComplete: false,
        },
        {
          countryname: "sanmarino",
          isComplete: false,
        },
        {
          countryname: "spain",
          isComplete: false,
        },
        {
          countryname: "sweden",
          isComplete: false,
        },
        {
          countryname: "switzerland",
          isComplete: false,
        },
        {
          countryname: "turkey",
          isComplete: false,
        },
        {
          countryname: "unitedkingdom",
          isComplete: false,
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

export default mongoose.model("User", userSchema, "users");
