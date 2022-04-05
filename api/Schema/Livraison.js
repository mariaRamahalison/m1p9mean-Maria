import mongoose from 'mongoose';
const { Schema } = mongoose;

const Livraison = new Schema ({
    status: {
        type:String , default:"EN COURS"
    },
    livreur:User,
    commande:Commande
});


module.exports={Livraison};