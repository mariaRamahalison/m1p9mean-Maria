export interface commandeI { 
    restaurant: string, 
    plats: { 
        plat:{_id: string, nom: string, composition: string, prixVente: number, prixAchat: number, status: string},
        quantite: number, 
        montant: number 
    }[] ,
    total:number,
    fraisLivraison:number,
    adresse:string
};
