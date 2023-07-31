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
    image : {
        type: String,
        required : false,
    },
    video : {
        type: String,
        required : false,
    },
    github : {
        type: String,
        required : false,
    },
    url : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('projects', dbSchema)