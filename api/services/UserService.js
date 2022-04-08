
const User = require('../Schema/User');
const jwtHelper = require('../Helper/jwtHelper');
async function find(query) {
    return await User.User.find(query).exec();
}

async function create(us) {
    return await new User.User(us).sa
    ve();
}

function verifyEmail(us){
    return userBool =find({ email: us.email })
    .then(result => {
        if(result.length==0) return true;
        return false;
    })
    .catch(error => { throw error});
}

async function inscription(us) {
    if(await verifyEmail(us)){
        us.mdp = await jwtHelper.encryptPassword(us.mdp);
        return create(us);
    }else{
        throw new Error("Email déja existant");
    }
}

async function login(log) {
    log.mdp=await jwtHelper.encryptPassword(log.mdp);
    return await find({ "email": log.email , "mdp": log.mdp });
}

module.exports = {
    find,
    create,
    login,
    inscription
};
