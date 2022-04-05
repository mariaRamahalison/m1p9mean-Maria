export interface UtilisateurDto {
    nom : String
    mdp : String
    adresse : String
    numero : String
    dateCreate: String
    dateUpdate : String
    status : String
    profil :  { nom : String, restaurant : any}
}