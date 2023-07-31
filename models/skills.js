const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    title : {
        type: String,
        required : false,
    },
    icon : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('skills', dbSchema)