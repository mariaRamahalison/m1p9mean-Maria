const mongoose = require('mongoose');
const { Schema } = mongoose;
var Plat= require('./Plat');

const RestaurantSchema = new Schema({
    nom: {
        type:String,
        required: [true, "Veuillez entrer un nom"],
        max:[20, "nom trop long"]
    },
    adresse:{
        type:String,
        max:[250, "adresse trop longue"]
    },
    tags:{
        type:String,
        max:[250,"tag trop long"]
    },
    status:{
        type: String , 
        default:"VALIDE"
    },
    plats: [Plat.PlatSchema],
    benefice:{
        type:Number,
        required: [true, "Veuillez entrer un bénéfice"]
    }
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports={Restaurant, RestaurantSchema};