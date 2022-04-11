
const User = require('../Schema/User');
const jwtHelper = require('../Helper/jwtHelper');
const mailService = require('../services/MailService');

UserModel = User.User;
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
    let mdpGenerate = generateMdp();
    let message=htmlInscription(us.email, mdpGenerate, us.profil.role) ;
    if (us.profil.nom === 'RESTAURANT') {
        if (!us.profil.restaurant) throw new Error("Vérifier le champ restaurant");
        us.mdp =mdpGenerate;
    }
    if (us.profil.nom === 'LIVREUR') us.mdp = mdpGenerate

    if (!await verifyEmail(us)) throw new Error("Email déja existant");
    us.mdp = await jwtHelper.encryptPassword(us.mdp);
    return create(us)
        .then(res => {
            sendMailInscription(us, message);
            return res;
            })
        .catch(error => { throw error });
}


function sendMailInscription(us, message) {
    // console.log("niditra");
    if (us.profil.nom != 'CLIENT') {
        let payload = {
            to: us.email,
            subject: "Confirmation inscription",
            html: message
        }
        mailService.sendMail(payload);
    }
}

function htmlInscription(login, mdp, role) {
    role = (role === 'RESTAURANT') ? "Administrateur d'un restaurant" : "Livreur";
    return "<p>Bonjour,</p><p>Vous aviez été enregistré sur E-Kaly par nos administrateur en tant que " + role + ".<p>Login:" + login + "</p><p>Mots de passe: " + mdp + "</p></p><p style='margin-bottom: 28px'>Merci. À très bientôt</p>"
}

async function login(log) {
    log.mdp = await jwtHelper.encryptPassword(log.mdp);
    return await find({ "email": log.email, "mdp": log.mdp });
}

async function update(item) {
    return await UserModel
        .findOneAndUpdate({ _id: item._id }, item, { new: true })
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
