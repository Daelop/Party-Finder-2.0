const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    discordId:{type:String, required:true, unique:true},
    username:{type:String, required:true},
    bio:{type:String, required:true, default:"User's bio is empty"},
    pic:{type:String, required:false, default:"./Images/user-default.png"}
},
{
    timestamps:true
});
const User = mongoose.model('user', userSchema);
module.exports = User;

