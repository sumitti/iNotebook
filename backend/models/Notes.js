const mongoose = require('mongoose');
const {Schema} = mongoose;
const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,//foreign key reference
        ref: 'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        default:'Personal'
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes',NotesSchema);