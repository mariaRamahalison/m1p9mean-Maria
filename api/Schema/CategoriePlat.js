import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategoriePlat= new Schema({
    nom: {
        type:String,
        required:[true, "Veuillez entrer un nom "]
    },
    restaurant:{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
});
