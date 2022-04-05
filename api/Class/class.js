class CategorieRestau {
    id;
    nom;
}

class Restaurant {
    nom;
    categorieRestau;
    description;
    adresse
    tag
    status
}

class Profil {
    id;
    nom;
    restaurant;
}


class Utilisateur {
    id;
    nom;
    prenom;
    mdp;
    adresse;
    numero;
    email;
    dateCreate;
    dateUpdate;
    status; //(valide, invalide)
    profil;

    constructor(nom,mdp,adresse,numero,profil){
        this.nom=nom;
        this.mdp=mdp;
        this.adresse=adresse;
        this.numero=numero;
        this.profil=profil;
    }
}

class CategoriePlat {
    id;
    nom;
    description;
    restaurant;
}

class Plat {
    id;
    nom;
    composition = [];
    restaurant;
    prixVente;
    prixAchat;
    dateCreate;
    dateUpdate;
    image;
    status;
    benefice;
    benefices = [];
    categoriePlat;
}

class Benefice {
    id;
    type;
    min;
    max;
    pourcentage;
    dateCreate;
    dateUpdate;
    status;
}

class Commande {
    dateCreate;
    dateUpdate;
    adresse;
    fraisLivraison;
    prixVente;
    status;
    client;
    plat;
    benefice;
}

class Livraison {
    id;
    status;
    livreur;
    commande;
}

module.exports = {
    Restaurant,
    Profil,
    Utilisateur, 
    CategorieRestau, 
    CategoriePlat,
    Plat,
    Commande,
    Benefice,
    Livraison
};