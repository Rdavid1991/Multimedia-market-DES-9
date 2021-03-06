const mongoose = require('mongoose');


const { Schema } = mongoose;

const videoSchema = new Schema({
    title: String,
    filename: String,
    description: String,
    price:{type:String,default:"299"},
    userid:{type: String},
    status:{type: Boolean,default:false},
    soldid: {type: String,default:null},
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }

});

module.exports = mongoose.model('audio', videoSchema);