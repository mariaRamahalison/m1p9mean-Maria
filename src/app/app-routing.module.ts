import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { FormulaireCategorieComponent } from './pages/plat/formulaire-categorie/formulaire-categorie.component';
import { FormulairePlatComponent } from './pages/plat/formulaire-plat/formulaire-plat.component';
import { FormulaireComponent } from './pages/plat/formulaire/formulaire.component';
import { ListePlatComponent } from './pages/plat/liste-plat/liste-plat.component';
import { ListeRestaurantComponent } from './pages/restaurant/liste-restaurant/liste-restaurant.component';
// import { MenuComponent } from './containers/menu/menu.component';

// Toutes les routes de votre application doivent dériver de app
// const routes: Routes = [
//   {
//     path: 'app',
//     loadChildren: async () => (await import('./home/home.module')).HomeModule
//   },
// ];


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' }
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    data: { title: 'inscription' }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'menu' },
    children: [
        // {
        //   path: 'restaurants',
        //   loadChildren: () => import('./pages/restaurant/liste-restaurant/liste-restaurant.module').then(mod => mod.ListeRestaurantModule)
        // },
        {
          path: 'restaurants',
          component: ListeRestaurantComponent,
          data : {title : 'liste des restaurants'}
        },
        {
          path: 'plats',
          component: ListePlatComponent,
          data : {title : 'liste des plats'}
        },
        {
          path: 'formulaire-categorie',
          component: FormulaireCategorieComponent,
          data : {title : 'formulaire catégories de plat'}
        },
        {
          path: 'formulaire-plat',
          component: FormulairePlatComponent,
          data : {title : 'formulaire catégories de plat'}
        },
        {
          path: 'formulaire',
          component: FormulaireComponent,
          data : {title : 'formulaire'}
        }
        // {
        //   path: 'mesactions',
        //   loadChildren: () => import('./pages/mesactions/mesactions.module').then(m => m.MesactionsModule)
        // },
        // {
        //   path: 'podium',
        //   loadChildren: () => import('./pages/podium/podium.module').then(m => m.PodiumModule)
        // },
        // {
        //   path: 'detail',
        //   loadChildren: () => import('./pages/detail-result/detail-result.module').then(m => m.DetailResultModule)
        // },
        // {
        //   path: 'tiers',
        //   loadChildren: () => import('./pages/index-tiers/tiers.module').then(m => m.TiersModule)
        // },
        // {
        //   path: 'dashboard',
        //   loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
        // },
        // {
        //   path: 'config',
        //   loadChildren: () => import('./pages/config-admin/configAdmin.module').then(m => m.ConfigAdminModule)
        // },
        // {
        //   path: 'collections',
        //   loadChildren: () => import('./pages/collections/collections.module').then(m =>m.CollectionsModule)
        // },
        // {
        //   path: 'recherches',
        //   loadChildren: () => import('./pages/recherches/recherches.module').then(m => m.RecherchesModule)
        // },
        // {
        //   path: 'decouvrir',
        //   loadChildren: () => import('./pages/decouvrir/decouvrir.module').then(m => m.DecouvrirModule)
        // },
        // {
        //   path: 'lienUtile',
        //   loadChildren: () => import('./pages/lien-utile/lien-utile.module').then(m => m.LienUtileModule)
        // },
        // {
        //   path: 'notifications&demandes',
        //   loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
        // },
        // {
        //   path: 'profil',
        //   loadChildren: () => import('./pages/profil/profil.module').then(m => m.ProfilModule)
        // },
        // {
        //   path: 'viewCollection/:idCollection',
        //   loadChildren: () => import('./pages/detail-collection/detail-collection.module').then( m => m.DetailCollectionModule)
        // },
        // {
        //   path: 'recompense',
        //   loadChildren: () => import('./pages/recompense/recompense.module').then(m => m.RecompenseModule)
        // },
        // {
        //   path: 'pushay',
        //   loadChildren: () => import('./pages/pushay/pushay.module').then(m => m.PushayModule)
        // },
        // {
        //   path: 'suggestion/:priorite',
        //   loadChildren: () => import('./pages/detail-suggestion/detail-suggestion.module').then(m => m.DetailSuggestionModule)
        // },
        // {
        //   path: 'download',
        //   loadChildren: () => import('./pages/demand-user/demand-user.module').then(m => m.DemandUserModule)
        // },
        // {
        //   path: 'download/access',
        //   loadChildren: () => import('./pages/download-acces/download-acces.module').then(m => m.DownloadAccesModule)
        // },
        // {
        //   path: 'collections/corbeille',
        //   loadChildren: () => import('./pages/corbeille/corbeille.module').then(m => m.CorbeilleModule)
        // },
        // {
        //   path: 'collections/droit',
        //   loadChildren: () => import('./pages/gestiondroit/gestiondroit.module').then(m => m.GestiondroitModule)
        // },
        // {
        //   path: 'indexation/admin',
        //   loadChildren: () => import('./pages/indexation-admin/indexation-admin.module').then(m => m.IndexationAdminModule)
        // },
        // {
        //   path: 'collections/demande',
        //   loadChildren: () => import('./pages/demande/demande.module').then(m => m.DemandeModule)
        // }
      ]
  },
  // { path: '**', component: P404Component }
];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
//   exports: [ RouterModule ]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
