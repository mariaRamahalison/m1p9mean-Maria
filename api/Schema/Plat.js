const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlatSchema= new Schema({
    nom: {
        type:String,
        required: [true, "Veuillez entrer un nom"],
        max:[20, "nom trop long"]
    },
    composition : {
        type: String
    },
    prixVente:{
        type:Number,
        required:[true,"Veuillez entrer un prix de vente"]
    },
    prixAchat:{
        type: Number,
        required: [true, "Veuillez entrer un prix d'achat"]
    },
    dateCreate:{
        type:Date, default:Date.now
    },
    image:{
        type:String
    },
    status:{
        type:String, default:"VALIDE"
    }
});


var Plat = mongoose.model('Plat', PlatSchema);
module.exports = { PlatSchema, Plat };