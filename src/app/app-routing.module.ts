import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CommandeAdminComponent } from './pages/commande/commande-admin/commande-admin.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LivreurComponent } from './pages/livreur/livreur.component';
import { LoginComponent } from './pages/login/login.component';
import { PanierComponent } from './pages/panier/panier.component';
import { FormulairePlatComponent } from './pages/plat/formulaire-plat/formulaire-plat.component';
import { FormulaireComponent } from './pages/plat/formulaire/formulaire.component';
import { ListePlatAdminComponent } from './pages/plat/liste-plat-admin/liste-plat-admin.component';
import { ListePlatComponent } from './pages/plat/liste-plat/liste-plat.component';
import { ListeRestauAdminComponent } from './pages/restaurant/liste-restau-admin/liste-restau-admin.component';
import { ListeRestaurantComponent } from './pages/restaurant/liste-restaurant/liste-restaurant.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' }
  },
  {
    path: 'inscription/:action',
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
          component: ListeRestauAdminComponent,
          data : {title : 'liste des restaurants'}
        },
        // {
        //   path: 'restaurants',
        //   component: ListeRestaurantComponent,
        //   data : {title : 'liste des restaurants'}
        // },
        {
          path: 'platAdmin',
          component: ListePlatAdminComponent,
          data : {title : 'liste des plats'}
        },
        {
          path: 'plats',
          component: ListePlatComponent,
          data : {title : 'liste des plats'}
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
        },
        {
          path: 'panier',
          component: PanierComponent,
          data : {title : 'panier'}
        },
        {
          path: 'commandeAdmin',
          component: CommandeAdminComponent,
          data : {title : 'commande'}
        },
        {
          path: 'livreurAdmin',
          component: LivreurComponent,
          data : {title : 'livreur'}
        }
        // {
        //   path: 'mesactions',
        //   loadChildren: () => import('./pages/mesactions/mesactions.module').then(m => m.MesactionsModule)
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
