import mongoose from 'mongoose';
import { totalmem } from 'os';
const { Schema } = mongoose;

const Commande= new Schema({
    dateCreate:{
        type:Date, default:Date.now
    },
    adresse:{
        type:String,
        required:[true,"Veuillez entrer une adresse"]
    },
    fraisLivraison:{
        type: Number
    },
    status:{
        type:String, default:"EN COURS"
    },
    client:User,
    plats:{
        Plat:Plat,
        restaurant:id
        total: total
    ,}
    benefice:{
        type:Number,
        default:10
    }
}); 