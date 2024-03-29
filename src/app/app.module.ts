import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MenuComponent } from './containers/menu/menu.component';
import { FormulairePlatComponent } from './pages/plat/formulaire-plat/formulaire-plat.component';
import { FormulaireComponent } from './pages/plat/formulaire/formulaire.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListeRestaurantComponent } from './pages/restaurant/liste-restaurant/liste-restaurant.component';
import { ListeRestauAdminComponent } from './pages/restaurant/liste-restau-admin/liste-restau-admin.component';
import { ListePlatAdminComponent } from './pages/plat/liste-plat-admin/liste-plat-admin.component';
import { ListePlatComponent } from './pages/plat/liste-plat/liste-plat.component';
import { CommunModule } from './common/commun/commun.module';
import { CommandeAdminComponent } from './pages/commande/commande-admin/commande-admin.component';
import { CommunFormModule } from './common/commun-form/commun-form.module';
import { LivreurComponent } from './pages/livreur/livreur.component';
import { CommandeLivreurComponent } from './pages/commande/commande-livreur/commande-livreur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommandestatistiqueComponent } from './pages/commande/commandestatistique/commandestatistique.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    MenuComponent,
    FooterComponent,
    FormulairePlatComponent,
    FormulaireComponent,
    PanierComponent,
    LoginComponent,
    InscriptionComponent,
    ListeRestaurantComponent,
    ListeRestauAdminComponent,
    ListePlatAdminComponent,
    ListePlatComponent,
    CommandeAdminComponent,
    LivreurComponent,
    CommandeLivreurComponent,
    CommandestatistiqueComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommunModule,
    CommunFormModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
