const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {type:String},
    // {type:mongoose.SchemaType.ObjectId,},
    parent : {type:String,ref:'Category'}
});

schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:'Category'
});

schema.virtual('newslist',{
    localField:'_id',
    foreignField:'categories',
    justOne:false,
    ref:'Article'
})
module.exports = mongoose.model("Category",schema)