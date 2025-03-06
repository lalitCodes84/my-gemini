import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  phone: { type: String, unique: true, sparse: true }, // Allows multiple `null` values
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
