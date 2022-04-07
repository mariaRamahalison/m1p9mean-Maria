const mongoose = require('mongoose');
const { Schema } = mongoose;
var Plat = require("./Plat");
var User = require("./User");

const CommandeSchema = new Schema({
    dateCreate: {
        type: Date, default: Date.now
    },
    plats: [{
        plat: { type: Plat.PlatSchema, required: true },
        qty: { type: Number, required: true },
        montant: { type: Number }
    }],
    restaurant: { type: String, required: true },
    adresse: {
        type: String,
        required: [true, "Veuillez entrer une adresse"]
    },
    livreur: {
        type: User.UserSchema
    },
    fraisLivraison: {
        type: Number , default:50
    },
    total: {
        type: Number
    },
    status: {
        type: String, default: "EN COURS"
    },
    benefice: {
        type: Number,
        default: 10
    }
});

var Commande = mongoose.model('Commande', CommandeSchema);
module.exports = { CommandeSchema, Commande };