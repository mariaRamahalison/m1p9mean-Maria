var mongoose = require('mongoose');
const { Schema } = mongoose;

// const UserSchema = new Schema({
//     nom: {
//         type: String,
//         max: [30, "nom trop long"],
//         required: [true, "Veuillez entrer un nom"],
//     },
//     prenom: {
//         type: String,
//         max: [30, "prénom trop long"],
//         required: [true, "Veuillez entrer un prénom"]
//     },
//     mdp: {
//         type: String,
//         min: [2, "mot de passe trop court"],
//         max: [30, "mot de passe trop long"],
//         required: [true, "Veuillez entrer un mot de passe"]
//     },
//     adresse: {
//         type: String,
//         max: [30, "adresse trop long"],
//         required: [true, "Veuillez entrer une adresse"]
//     },
//     numero: {
//         type: String,
//         max: [7, "numero invalide"],
//         required: [true, "Veuillez entrer un numero"]
//     },
//     email: {
//         type: String,
//         // validate: [isEmail, 'invalid email'],
//         required: [true, "Veuillez entrer une adresse email"],
//         unique: [true, "Cet email est dejà existante"]
//     },
//     dateCreate: {
//         type: Date, default: Date.now
//     },
//     dateUpdate: {
//         type: Date, default: Date.now
//     },
//     status: {
//         type: String, default: "VALIDE"
//     },
//     profil: {
//         type: String, default: "CLIENT"
//     }
// });


// const RestaurantSchema = new Schema({
//     nom: {
//         type: String,
//         required: [true, "Veuillez entrer un nom"],
//         unique: [true, "nom déjà existant"],
//         max: [20, "nom trop long"]
//     },
//     description: {
//         type: String,
//         max: [50, "description trop longue"]
//     },
//     adresse: {
//         type: String,
//         max: [250, "adresse trop longue"]
//     },
//     tag: {
//         type: String,
//         max: [250, "tag trop long"]
//     },
//     status: { type: String, default: "ACTIVE" }
// });

const RestaurantSchema = new Schema({nom: {
    type: String,
    required: [true, "Veuillez entrer un nom"],
    unique: [true, "nom déjà existant"],
    max: [20, "nom trop long"]
    },
    description: {
        type: String,
        max: [50, "description trop longue"]
    },
    adresse: {
        type: String,
        max: [250, "adresse trop longue"]
    },
    tag: {
        type: String,
        max: [250, "tag trop long"]
    },
    status: { type: String, default: "ACTIVE" }
    });

const CategoriePlatSchema = new Schema({
    nom: {
        type: String,
        required: [true, "Veuillez entrer un nom "]
    },
    restaurant: [RestaurantSchema]
});

const PlatSchema = new Schema({
    nom: {
        type: String,
        required: [true, "Veuillez entrer un nom"],
        unique: [true, "nom déjà existant"],
        max: [20, "nom trop long"]
    },
    composition: {
        type: String
    },
    restaurant: {
        type: RestaurantSchema
    },
    prixVente: {
        type: Number,
        required: [true, "Veuillze entrer un prix de vente"]
    },
    prixAchat: {
        type: Number,
        required: [true, "Veuillze entrer un prix d'achat"]
    },
    dateCreate: {
        type: Date, default: Date.now
    },
    dateUpdate: {
        type: Date, default: Date.now
    },
    image: {
        type: String
    },
    status: {
        type: String, default: "VALIDE"
    },
    categoriePlat: CategoriePlatSchema
});

const CommandeSchema = new Schema({
    dateCreate: {
        type: Date, default: Date.now
    },
    dateUpdate: {
        type: Date, default: Date.now
    },
    adresse: {
        type: String,
        required: [true, "Veuillez entrerune adresse"]
    },
    fraisLivraison: {
        type: Number
    },
    status: {
        type: String, default: "EN COURS"
    },
    client: UserSchema,
    Plat: PlatSchema,
    benefice: {
        type: Number,
        default: 10
    }
});

const LivraisonSchema = new Schema({
    status: {
        type: String, default: "EN COURS"
    },
    livreur: UserSchema,
    commande: CommandeSchema
});

module.exports = {
    RestaurantSchema,
    // ProfilSchema,
    // UserSchema,
    CategoriePlatSchema,
    PlatSchema,
    CommandeSchema,
    LivraisonSchema
}