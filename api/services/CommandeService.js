const Commande = require('../Schema/Commande');

CommandeModel = Commande.Commande;

async function create(item) {
    return await new CommandeModel(item).save();
}


async function update(item) {
    return await CommandeModel
        .findOneAndUpdate({ _id: item._id }, item, { new: true })
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
        dateCreate: { $gte: (event.setHours(0, 0, 0, 0)).toString() },
        dateCreate: { $lte: (event.setHours(23, 59, 59, 59)).toString() }
    }
    return await find(query);
}

async function find(query) {
    return await CommandeModel.find(query).exec();
}

function getTableLigne(commande) {
    let tableLigne = [];
    commande.forEach(element => {
        element.plats.forEach((plat) => {
            let table = {
                commande:(element._id).toString(),
                restaurantId:(element.restaurant.idRestau).toString(),
                restaurantNom:element.restaurant.nom,
                platId: (plat.plat._id).toString(),
                platNom: plat.plat.nom,
                montant:plat.montant,
                quantite:plat.quantite
            }
            let date=new Date(element.dateCreate);
            table.day=(date).getDate();
            table.month=(date).getMonth();
            table.year=(date).getYear()+1900 ;
            table.achat=(plat.plat.prixAchat *table.quantite);
            table.beneficeRestau=table.montant - (plat.plat.prixAchat *table.quantite),
            table.beneficeEkaly = (table.beneficeRestau * element.benefice) / 100;
            tableLigne.push(table);
        });
    });
    return tableLigne;
}


function tri(commande, compare, key) {
    valueTri=[];
    compare.forEach(itemCompare => {
        let tableDay = commande.filter(element => element[key] === itemCompare);
        valueTri.push(tableDay);
    });
    return valueTri;
}

function getAllValueOfTri(array, key) {
    return array.map(item => item[key])
        .filter((value, index, self) => self.indexOf(value)===index);
}

async function getOnTri(key ) {
    let listCommande=await findAll();
    commandeLigne=getTableLigne(listCommande);
    if(!key) return commandeLigne;
    let valueTri = getAllValueOfTri(commandeLigne, key);
    commandeTri = tri(commandeLigne, valueTri, key);
    return total(commandeTri, key);
}


function findAll(){
    return commandeList = find({status:"TERMINE"})
    .then(result => {
        return result;
    })
    .catch(error => { throw error });
}
function total(commande, key) {
    let total = [];
    commande.forEach(element => {
        if (element.length > 0) {
            let value = {
                beneficeRestau: sommeAttribute(element, "beneficeRestau"),
                beneficeEkaly: sommeAttribute(element, "beneficeEkaly"),
                montant: sommeAttribute(element, "montant"),
                achat: sommeAttribute(element, "achat"),
                quantite: sommeAttribute(element, "quantite"),
                day: element[0].day,
                year: element[0].year,
                month :element[0].month,
                restaurantNom: element[0].restaurantNom,
                restaurantId: element[0].restaurantId,
                platNom: element[0].platNom,
                platId: element[0].platId
            };
            total.push(value);
        }
    });
    return total;
}

function sommeAttribute(array, key) {
    return beneficeTotal = array
        .map((x) => x[key])
        .reduce((acc, cur) => acc + cur, 0);
}

module.exports = {
    filtrer,
    create,
    update,
    supprimer,
    find,
    getCommandeNow,
    getOnTri
}