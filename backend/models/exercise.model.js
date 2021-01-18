const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username : {type:String,required:true,minlength:3,trim:true},
    description : {type:String, required:true,trim:true},
    duration : {type:Number,required:true,default:5},
    date : {type:Date,required:true}
},{
    timestamps:true
});

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;