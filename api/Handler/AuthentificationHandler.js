var jwtHelper = require('../Helper/jwtHelper');

var verifyToken = function (req, res, next) {
   try {  decoded=jwtHelper.decode(getToken(req));
        req.user= decoded.user;
        next();
    } catch (ex) {
        // console.log(ex);
        res.status(400).send({ code: 400, message: "Token invalid ,veuillez vous reconnecter" });
    }
}

function getToken(req){
    return token = ((req.headers.authorization).split('Bearer '))[1];
}

module.exports = { verifyToken }