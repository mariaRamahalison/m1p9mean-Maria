export interface commandeI { 
    plats: { 
        plat:{_id: string, nom: string, composition: string, prixVente: number, prixAchat: number, status: string},
        quantite: number, 
        montant: number 
    }[] ,
    restaurant: string,
    client : {},
    adresse:string
    livreur:{},
    fraisLivraison:number,
    total:number,
};
