const CommandeService = require('../../services/CommandeService');
var resultHelper = require('../../Helper/resultHepler');


const CommandeRouter = (url, app) => {

    app.post(url + "/create", (req, res) => {
        Commande = req.body
        CommandeService.create(Commande)
            .then(Commande => {
                resultHelper.succes(res, Commande,"Commande crée avec succès");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.post("/update", (req, res) => {
        Commande = req.body;
        CommandeService.update(Commande)
            .then(Commande => {
                    resultHelper.succes(res,{},"Commande modifié avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post("/delete", (req, res) => {
        id= req.body;
        CommandeService.supprimer(id)
            .then(Commande => {
                    resultHelper.succes(res,{},"Commande supprimé avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.get("/all", (req, res) => {
        CommandeService.findAll()
            .then(Commandes => {
                    resultHelper.succes(res, Commandes,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });
}

module.exports = CommandeRouter