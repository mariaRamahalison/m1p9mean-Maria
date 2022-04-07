const mongoose  = require('mongoose');
const { Schema } = mongoose;
var child= require("./Child");

const parentSchema = new Schema({
    nom:{
        type:String, default:"test"
    },
    child:child.childSchema
});


var parent= mongoose.model('parent', parentSchema);
module.exports={parentSchema,parent};