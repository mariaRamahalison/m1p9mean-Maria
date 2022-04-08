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


// Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, (err, doc) => {
//     if (err) {
//         console.log("Something wrong when updating data!");
//     }

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
    console.log(item);
    return await find({ nom: { $regex: item.filtre} } , { nom: { $regex: item.filtre } });
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