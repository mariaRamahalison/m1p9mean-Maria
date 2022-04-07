const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    nom: {
        type:String,
        required: [true, "Veuillez entrer un nom"],
        unique :[true, "nom déjà existant"],
        max:[20, "nom trop long"]
    },
    description:{
        type:String,
        max :[50 , "description trop longue"]
    },
    adresse:{
        type:String,
        max:[250, "adresse trop longue"]
    },
    tag:{
        type:String,
        max:[250,"tag trop long"]
    },
    status:{type: String , default:"ACTIVE"}
});


var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports={Restaurant, RestaurantSchema};