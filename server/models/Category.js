const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {type:String},
    // {type:mongoose.SchemaType.ObjectId,},
    parent : {type:String,ref:'Category'}
})
module.exports = mongoose.model("Category",schema)