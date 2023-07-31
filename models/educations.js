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
    speciality : {
        type: String,
        required : false,
    },
    school : {
        type: String,
        required : false,
    },
    icon : {
        type: String,
        required : false,
    },
    date : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('educations', dbSchema)