import mongoose, { Schema } from "mongoose";

const CoverImageSchema = new Schema(
  {
    secure_url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  { _id: false }
); 
const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
