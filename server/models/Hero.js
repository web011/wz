const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {type:String},
    avatar : {type:String},
    title : {type:String},
    categories : [{type:String,ref:'Category'}],
    scores : {
        difficult : {type:Number},
        skills : {type:Number},
        attack : {type:Number},
        survive : {type:Number},
    },
    skills : [{
        icon : {type:String},
        name : {type:String},
        description : {type:String},
        tips : {type:String},
    }],
    items1 : [{type:String,ref:'Item'}],
    items2 : [{type:String,ref:'Item'}],
    usageTips : {type:String},
    battleTips : {type:String},
    teamTips : {type:String},
    partners : [{
        hero : {type:String,ref:'Hero'},
        description : {type:String},
    }],
})
module.exports = mongoose.model("Hero",schema)