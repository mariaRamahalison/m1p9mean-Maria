
const User = require('../Schema/User');
const jwtHelper = require('../Helper/jwtHelper');

UserModel=User.User;
async function find(query) {
    return await User.User.find(query).exec();
}

async function create(us) {
    return await new User.User(us).save();
}

function generateMdp() {
    return (Math.random().toString()).substr(2, 8)
}



function verifyEmail(us) {
    return userBool = find({ email: us.email })
        .then(result => {
            if (result.length == 0) return true;
            return false;
        })
        .catch(error => { throw error });
}

async function findLivreur() {
    return await find({ "profil.nom": "LIVREUR" });
}
async function inscription(us) {
    if (us.profil.nom === 'RESTAURANT') {
        if (!us.profil.restaurant) throw new Error("Vérifier le champ restaurant");
        us.mdp = generateMdp();
        console.log(us.mdp);
    }
    if (us.profil.nom === 'LIVREUR') us.mdp = generateMdp();
    if (await verifyEmail(us)) {
        us.mdp = await jwtHelper.encryptPassword(us.mdp);
        return create(us);
    } else {
        throw new Error("Email déja existant");
    }
}

async function login(log) {
    log.mdp = await jwtHelper.encryptPassword(log.mdp);
    return await find({ "email": log.email, "mdp": log.mdp });
}

async function update(item) {
    return await UserModel
        .findOneAndUpdate({_id:item._id},item, { new: true })
        .exec();
}

module.exports = {
    find,
    create,
    login,
    inscription,
    findLivreur,
    update
};
