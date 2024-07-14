const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    content:{
        type:String,

    },
    imageUrl:{
        type:String,
    },

}) 

module.exports = mongoose.model('Blog',blogSchema)