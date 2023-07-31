const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    fullName : {
        type: String,
        required : false,
    },
    email : {
        type: String,
        required : false,
    },
    password : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('user', dbSchema)