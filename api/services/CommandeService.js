const { query } = require('express');
const Commande = require('../Schema/Commande');

CommandeModel = Commande.Commande;

async function create(item) {
    return await new CommandeModel(item).save();
}


async function update(item) {
    return await CommandeModel
        .findOneAndUpdate({_id:item._id}, item, { new: true })
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
    if (item.restau) {
        query['restaurant.idRestau'] = item.restau;
    }
    if (item.status) {
        query.status = item.status;
    }
    return await find(query);
}

async function getCommandeNow(item) {
    let event = new Date();
    let query = {
        dateCreate: { $gte: (event.setHours(0,0,0,0)).toString() },
        dateCreate: { $lte: (event.setHours(23,59,59,59)).toString() }
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
    find,
    getCommandeNow
}