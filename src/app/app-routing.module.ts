import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CommandeAdminComponent } from './pages/commande/commande-admin/commande-admin.component';
import { CommandeLivreurComponent } from './pages/commande/commande-livreur/commande-livreur.component';
import { CommandestatistiqueComponent } from './pages/commande/commandestatistique/commandestatistique.component';
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
    // {
    //   path: '',
    //   redirectTo: 'login',
    //   pathMatch: 'full',
    // },
    path: 'app',
    children: [
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
              path: 'restaurant/admin',
              component: ListeRestauAdminComponent,
              data : {title : 'liste des restaurants'}
            },
            {
              path: 'plat/admin',
              component: ListePlatAdminComponent,
              data : {title : 'liste des plats'}
            },
            {
              path: 'plats',
              component: ListePlatComponent,
              data : {title : 'liste des plats'}
            },
            {
              path: 'formulaire/plat',
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
              path: 'commande/admin',
              component: CommandeAdminComponent,
              data : {title : 'commande'}
            },
            {
              path: 'livreur/admin',
              component: LivreurComponent,
              data : {title : 'livreur'}
            },
            {
              path: 'restaurants',
              component: ListeRestaurantComponent,
              data : {title : 'liste des restaurant'}
            },
            {
              path: 'commande/livreur',
              component: CommandeLivreurComponent,
              data : {title : 'gestion commande livreur'}
            },
            {
              path: 'statistique',
              component: CommandestatistiqueComponent,
              data : {title : 'statistique '}
            }
          ]
      },
    ]
  },
  { path: '**', redirectTo: '/app/login' }
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
