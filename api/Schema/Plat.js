import mongoose from 'mongoose';
const { Schema } = mongoose;

const Plat= new Schema({
    nom: {
        type:String,
        required: [true, "Veuillez entrer un nom"],
        unique :[true, "nom déjà existant"],
        max:[20, "nom trop long"]
    },
    composition : {
        type: String
    },
    restaurant:{
        type:Restaurant
    },
    prixVente:{
        type:Number,
        required:[true,"Veuillze entrer un prix de vente"]
    },
    prixAchat:{
        type: Number,
        required: [true, "Veuillze entrer un prix d'achat"]
    },
    dateCreate:{
        type:Date, default:Date.now
    },
    dateUpdate:{
        type:Date, default:Date.now
    },
    image:{
        type:String
    },
    status:{
        type:String, default:"VALIDE"
    },
    categoriePlat: {type: mongoose.Schema.Types.ObjectId, ref: 'CategoriePlat'}
});


module.exports={Plat};