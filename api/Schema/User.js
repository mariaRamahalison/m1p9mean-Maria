const mongoose = require('mongoose');
const { Schema } = mongoose;
var Restaurant=require("./Restaurant");

const UserSchema = new Schema({
    nom: {
        type: String,
        max: [30, "nom trop long"],
        required: [true, "Veuillez entrer un nom"],
    },
    prenom: {
        type: String,
        max: [30, "prénom trop long"],
        required: [true, "Veuillez entrer un prénom"]
    },
    mdp: {
        type: String,
        min: [2, "mot de passe trop court"],
        max: [30, "mot de passe trop long"],
        required: [true, "Veuillez entrer un mot de passe"]
    },
    adresse: {
        type: String,
        max: [30, "adresse trop long"],
        required: [true, "Veuillez entrer une adresse"]
    },
    numero: {
        type: String,
        max: [7, "numero invalide"],
        required: [true, "Veuillez entrer un numero"]
    },
    email: {
        type: String,
        validate: [String, 'invalid email'],
        required: [true, "Veuillez entrer une adresse email"],
        // unique : [true, "Cet email est dejà existante"]
    },
    dateCreate: {
        type: Date, default: Date.now
    },
    dateUpdate: {
        type: Date, default: Date.now
    },
    status: {
        type: String, default: "VALIDE"
    },
    profil: {
        "nom":{
            type: String, default: "CLIENT"
        },
        "restaurant":{
            type: Restaurant.RestaurantSchema
        }
        
    }
});


var User = mongoose.model('User', UserSchema);
module.exports = { UserSchema, User };