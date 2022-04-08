export interface commandeI { 
    idRestau: string, 
    plats: { _id: string, nom: string, composition: string, prixVente: number, prixAchat: number, status: string, quantite: number, montant: number }[] ,
    total:number,
    fraisLivraison:number
};
