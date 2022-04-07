const mongoose  = require('mongoose');
const { Schema } = mongoose;

const childSchema = new Schema({
    nom :{
        type: String,
        max :[30, "nom trop long"],
        required:[true, "Veuillez entrer un nom"],
        unique:true
    }
});


var child= mongoose.model('child', childSchema);
module.exports={childSchema,child};