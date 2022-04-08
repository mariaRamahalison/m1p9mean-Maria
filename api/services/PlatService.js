const Plat = require('../Schema/Plat');
const Restaurant = require('../Schema/Restaurant');

PlatModel = Plat.Plat;
RestaurantModel = Restaurant.Restaurant;

async function create(idRestau, item) {
    return await RestaurantModel
        .findOneAndUpdate(
            { _id: idRestau },
            { $push: { plats: item } },
            { new: true }
        );
}

async function update(item) {
    return await RestaurantModel
        .findOneAndUpdate(
            { 'plats._id': item._id },
            { "$set": { "plats.$": item } },
            { new: true }
        );
}

async function find(query) {
    return await RestaurantModel.find(query).exec();
}

async function filtre(item) {
    return find({
        _id:item._id,
        $or:[{ "plats.nom": { $regex: item.filtre} },{ "plats.composition": { $regex: item.filtre} }]
    });
}

// async function findBy(item) {
//     console.log(item);
//     return await find({ nom: { $regex: item.filtre} } , { nom: { $regex: item.filtre } });
// }


async function supprimer(id) {
    return await PlatModel
        .deleteOne({ _id: id });
}

async function disable(item) {
    item.status = "INVALIDE";
    return await update(item);
}

// async function findRestau(id) {
//     return await RestaurantModel.fin("_id:").exec();
// }


module.exports = {
    create,
    update,
    supprimer,
    filtre,
    disable
}