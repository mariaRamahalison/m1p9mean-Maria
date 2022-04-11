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
        _id: item._id,
        $or: [{ "plats.nom": { $regex: new RegExp(item.filtre, "i") } }, { "plats.composition": { $regex: new RegExp(item.filtre, "i") } }],
    })
        .then(res => { return filtreLike(res, item); })
        .catch(error => { throw error })
}

function criteria(item, plat) {
    let value = false;
    if (plat.nom.match(new RegExp(item.filtre, "i")) || plat.composition.match(new RegExp(item.filtre, "i"))) {
        value = true;
        // console.log("ok");
        if (item.status) {
            // console.log(plat.status);
            if (plat.status != item.status) value = false;
        }
    }
    return value;
}

function filtreLike(data, item) {
    let result = [];
    data.forEach(element => {
        let value = element.plats.filter(plat => {
            return criteria(item, plat);
        });
        if (value.length > 0) Array.prototype.push.apply(result, value);
    });
    return result;
}


async function supprimer(id) {
    return await PlatModel
        .deleteOne({ _id: id });
}

async function disable(item) {
    item.status = "INVALIDE";
    return await update(item);
}

module.exports = {
    create,
    update,
    supprimer,
    filtre,
    disable
}