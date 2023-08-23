const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    gender: { type: String, enum: ["male", "female"] },
    is_online: { type: Boolean },
    siblings: [String],
    email: {type: String, unique: true, required: true},
    name: { type: String, required: true },
    occupation: {type: String, default: "Student"},
    age: Number,
  },
  { collection: "user" }
);
// UserSchema.index({ slug: 1, userid: 1 }, { unique: true });
const model = mongoose.model("User", UserSchema);
module.exports = model;
