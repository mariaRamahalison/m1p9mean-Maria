const UserService = require('../../services/UserService');
var jwtHelper = require('../../Helper/jwtHelper');
var resultHelper = require('../../Helper/resultHepler');


const UserRouter = (url, app) => {

    app.post("/user/login", (req, res) => {
        log = req.body
        UserService.login(log)
            .then(user => {
                if(user.length==0) throw new Error("Email ou mot de passe incorrecte");
                token = jwtHelper.generateToken(user[0]);
                resultHelper.succes(res, { token: token, user: user[0]} ,"");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.post("/user/inscription", (req, res) => {
        us = req.body;
        UserService.inscription(us)
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"Inscription faite avec succès");
                }
            })
            .catch(error => {  resultHelper.error(res, error.message); });
    });

    app.get("/api/user/livreur/all", (req, res) => {
        UserService.findLivreur()
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"")
                }
            })
            .catch(error => {  resultHelper.error(res, error.message); });
    });

    app.put("/api/user/update", (req, res) => {
        UserService.update(req.body)
            .then(user => {
                if (user) {
                    resultHelper.succes(res,user,"")
                }
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });
    

    

    // app.post(url + "/testAll", (req, res) => {
    //     par = new parent.parent(req.body.parent);
    //     par.find().exec()
    //         .then(result => { res.status(200).send(result) })
    //         .catch(error => { res.status(400).send(error) })
    // });

    // app.get(`${url}/all`, findAll)
    // app.post(`${url}/login`, login)
}

module.exports = UserRouter