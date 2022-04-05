import mongoose from 'mongoose';
const { Schema } = mongoose;

const Commande= new Schema({
    dateCreate:{
        type:Date, default:Date.now
    },
    dateUpdate:{
        type:Date, default:Date.now
    },
    adresse:{
        type:String,
        required:[true,"Veuillez entrerune adresse"]
    },
    fraisLivraison:{
        type: Number
    },
    status:{
        type:String, default:"EN COURS"
    },
    client:User,
    Plat:Plat,
    benefice:{
        type:Number,
        default:10
    }
}); 