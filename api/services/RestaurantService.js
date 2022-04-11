const { verify } = require('crypto');
const Restaurant = require('../Schema/Restaurant');

RestaurantModel = Restaurant.Restaurant;


function verifyName(resto) {
    return userBool = find({ nom: resto.nom })
        .then(result => {
            if (result.length == 0) return true;
            return false;
        })
        .catch(error => { throw error });
}

async function create(resto) {
    if (await verifyName(resto)) {
        return await new RestaurantModel(resto).save();
    } else {
        throw new Error("Restaurant déja existant");
    }
}


async function update(item) {
    return await RestaurantModel
        .findOneAndUpdate({_id:item._id},item, { new: true })
        .exec();
}

async function supprimer(id) {
    return await RestaurantModel
        .deleteOne({ _id: id });
}

async function disable(item) {
    item.status = "INVALIDE";
    return await update(item);
}

async function find(query) {
    return await RestaurantModel.find(query).exec();
}

async function findById(id) {
    return await find({ _id: id })
}

async function findAll() {
    return await RestaurantModel.find().exec();
}

async function findBy(item) {
    query={
        // status
        $or: [{ nom: { $regex: new RegExp(item.filtre, "i")  } }, { tags: { $regex: new RegExp(item.filtre, "i") } }]
    }
    if (item.status) {
        query.status = item.status;
    }
    return await find(query);
}


module.exports = {
    create,
    update,
    supprimer,
    find,
    disable,
    findAll,
    findBy,
    findById
}