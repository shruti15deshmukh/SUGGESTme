const mongoose= require('mongoose');
var schema= new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    suggestion: String,
    status: String

    


})
const suggestionDB=mongoose.model('SuggestionDB',schema)
module.exports=suggestionDB;