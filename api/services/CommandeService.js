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

// async function disable(item) {
//     item.status = "INVALIDE";
//     return await update(item);
// }

async function find(query) {
    return await CommandeModel.fin(query).exec();
}


module.exports={
    create,
    update,
    supprimer,
    find
}