
import { commandeI } from "../dto/commandeI";
export const APIUSER = {
    inscription: '/user/inscription',
    login: '/user/login',
    update: '/api/user/update'
}

export const APIRESTAU = {
    filtre: '/api/restaurant/filtre',
    create: '/api/restaurant/create',
    update: '/api/restaurant/update',
}


export const APILIVREUR = {
    filtre: '/api/user/livreur/filtre',
    create: 'user/inscription',
    all: '/api/user/livreur/all'
}


export const APIPLAT = {
    filtre: '/api/plat/filtre',
    create: '/api/plat/create',
    update: '/api/plat/update'
}

export const APICOM = {
    filtre: '/api/commande/filtre',
    create: '/api/commande/create',
    findNow: '/api/commande/find/now',
    update: '/api/commande/update',
    trier: '/api/commande/benefice/tri'
}


export let COMMANDE : commandeI

export const LOCALSTORAGE = {
    user: '',
    token: ''
};

export const FRAISLIVRAISON= 50





