// Purpose: Model for eventUser
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const eventUserSchema = new Schema(
  {
    user: { type: ObjectId, required: true },
    event: { type: ObjectId, required: true },
    eventName: { type: String, required: true },
    username: { type: String, required: true },
    ign: { type: String, required: false },
    server: { type: String, required: false },
    tos: { type: Boolean, required: false },
    
  },
  {
    timestamps: true,
  }
);
const eventUser = mongoose.model("eventUser", eventUserSchema);
module.exports = eventUser;
