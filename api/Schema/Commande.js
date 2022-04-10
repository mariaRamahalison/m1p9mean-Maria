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
        quantite: { type: Number, required: true },
        montant: { type: Number }
    }],
    restaurant: {
        idRestau: { type: String, required: true },
        nom: { type: String, required: true }
    },
    client: {
        type: User.UserSchema
    },
    adresse: {
        type: String,
        required: [true, "Veuillez entrer une adresse"]
    },
    livreur: {
        type: User.UserSchema
    },
    fraisLivraison: {
        type: Number, default: 50
    },
    total: {
        type: Number
    },
    status: {
        type: String, default: "COMMANDE"
    },
    benefice: {
        type: Number,
        default: 10
    }
});

var Commande = mongoose.model('Commande', CommandeSchema);
module.exports = { CommandeSchema, Commande };