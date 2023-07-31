const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    title : {
        type: String,
        required : false,
    },
    description : {
        type: String,
        required : false,
    },
    date : {
        type: String,
        required : false,
    },
    company : {
        type: String,
        required : false,
    },
    companyIcon : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('experience', dbSchema)