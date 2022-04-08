const PlatService = require('../../services/PlatService');
var resultHelper = require('../../Helper/resultHepler');


const PlatRouter = (url, app) => {

    app.post(url + "/create", (req, res) => {
        plat = req.body.plat;
        restau=req.body.idRestau;
        PlatService.create(restau,plat)
            .then(plat => {
                resultHelper.succes(res, plat,"Plat crée avec succès");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    app.put(url+"/update", (req, res) => {
        plat = req.body;
        PlatService.update(plat)
            .then(plat => {
                    resultHelper.succes(res,plat,"Plat modifié avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url+"/delete", (req, res) => {
        id= req.body;
        PlatService.supprimer(id)
            .then(plat => {
                    resultHelper.succes(res,{},"Plat supprimé avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url+"/filtre", (req, res) => {
        PlatService.filtre(req.body)
            .then(plats => {
                    resultHelper.succes(res, plats,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });
}

module.exports = PlatRouter