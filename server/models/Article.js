const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title : {type:String},
    categories : [{type:String,ref:'Category'}],
    body : {type:String}
})
module.exports = mongoose.model("Article",schema)