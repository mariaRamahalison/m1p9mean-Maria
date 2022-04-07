const RestaurantService = require('../../services/RestaurantService');
var resultHelper = require('../../Helper/resultHepler');


const RestaurantRouter = (url, app) => {

    app.get(url+"/all", (req, res) => {
        RestaurantService.findAll()
            .then(restos => {
                    resultHelper.succes(res, restos,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.get(url+"/find/id", (req, res) => {
        id=req.query.id;
        RestaurantService.find(id)
            .then(restos => {
                    resultHelper.succes(res, restos,"")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url + "/create", (req, res) => {
        resto = req.body
        RestaurantService.create(resto)
            .then(resto => {
                resultHelper.succes(res, resto,"Restaurant crée avec succès");
            })
            .catch(error => { resultHelper.error(res, error.message); });
    });

    //create plat et update 
    app.put(url+"/update", (req, res) => {
        resto = req.body;
        RestaurantService.update(resto)
            .then(resto => {
                    resultHelper.succes(res,{},"Restaurant modifié avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });

    app.post(url+"/delete", (req, res) => {
        id= req.body;
        RestaurantService.supprimer(id)
            .then(resto => {
                    resultHelper.succes(res,{},"Restaurant supprimé avec succès")
            })
            .catch(error => {  console.log(error); resultHelper.error(res, error.message); });
    });
}

module.exports = RestaurantRouter