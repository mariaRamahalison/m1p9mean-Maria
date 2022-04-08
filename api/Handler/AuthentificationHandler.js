var jwtHelper = require('../Helper/jwtHelper');

var verifyToken = function (req, res, next) {
    try {
//         req.setHeader("Access-Control-Allow-Origin", "*");
// req.setHeader("Access-Control-Allow-Credentials", "true");
// req.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// req.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        decoded=jwtHelper.decode(getToken(req));
        req.user= decoded.user;
        next();
    } catch (ex) {
        res.status(400).send({ code: 400, message: "Token invalid ,veuillez vous reconnecter" });
    }
    // next();
}

function getToken(req){
    return token = ((req.headers.authorization).split('Bearer '))[1];
}

module.exports = { verifyToken }