const { query } = require('express');
const Commande = require('../Schema/Commande');

CommandeModel = Commande.Commande;

async function create(item) {
    return await new CommandeModel(item).save();
}

async function update(item) {
    return await CommandeModel
        .findOneAndUpdate(item._id, item, { new: true })
        .exec();
}

async function supprimer() {
    return await CommandeModel
        .deleteOne({ _id: id });
}

async function filtrer(item) {
    let query = {
        // $or: [{ "plats.nom": { $regex: item.filtre } }, { "plats.composition": { $regex: item.filtre } }]
    };
    if(item.restau){
        query['restaurant.idRestau']=item.restau ;
    }
    if(item.status){
        query.status=item.status;
    }
    return await find(query);
}

async function find(query) {
    return await CommandeModel.find(query).exec();
}

module.exports = {
    filtrer,
    create,
    update,
    supprimer,
    find
}