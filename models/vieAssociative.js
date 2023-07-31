const mongoose = require('mongoose')

const dbSchema = mongoose.Schema({
    title : {
        type: String,
        required : false,
    },
    image : {
        type: String,
        required : false,
    },
     
})

module.exports = Db = mongoose.model('vieAssociative', dbSchema)