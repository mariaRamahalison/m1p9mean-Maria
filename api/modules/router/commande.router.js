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


    app.post(url + "/benefice/tri", (req, res) => {
        CommandeService.getOnTri(req.body.value)
            .then(Commande => {
                resultHelper.succes(res, Commande,"tri");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.put(url+"/update", (req, res) => {
        Commande = req.body;
        CommandeService.update(Commande)
            .then(commande => {
                    resultHelper.succes(res,commande,"Commande modifié avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url+"/delete", (req, res) => {
        id= req.body;
        CommandeService.supprimer(id)
            .then(Commande => {
                    resultHelper.succes(res,{},"Commande supprimé avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url+"/filtre", (req, res) => {
        CommandeService.filtrer(req.body)
            .then(Commandes => {
                    resultHelper.succes(res, Commandes,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.get(url+"/find/now", (req, res) => {
        CommandeService.getCommandeNow()
            .then(Commandes => {
                    resultHelper.succes(res, Commandes,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    
}

module.exports = CommandeRouter