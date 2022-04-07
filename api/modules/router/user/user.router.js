const { login, findAll } = require('../../../controller/user.controller')
// var mongoose = require('mongoose');
const UserService = require('../../../services/UserService');
var child = require('../../../Schema/Child');
var parent = require('../../../Schema/Parent');
var jwtHelper = require('../../../Helper/jwtHelper');
var resultHelper = require('../../../Helper/resultHepler');


const UserRouter = (url, app) => {

    app.post(url + "/login", (req, res) => {
        log = req.body
        UserService.login(log)
            .then(user => {
                if(user.length==0) throw new Error("Email ou mot de passe incorrecte");
                token = jwtHelper.generateToken(user[0]);
                resultHelper.succes(res, { token: token, user: user} ,"");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.post("/inscription", (req, res) => {
        us = req.body;
        UserService.inscription(us)
            .then(user => {
                if (user) {
                    resultHelper.succes(res,{},"Inscription faite avec succès")
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