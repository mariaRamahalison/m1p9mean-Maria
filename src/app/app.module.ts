import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MenuComponent } from './containers/menu/menu.component';
import { FormulairePlatComponent } from './pages/plat/formulaire-plat/formulaire-plat.component';
// import { FormulaireCategorieComponent } from './pages/plat/formulaire-categorie/formulaire-categorie.component';
import { FormulaireComponent } from './pages/plat/formulaire/formulaire.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListeRestaurantComponent } from './pages/restaurant/liste-restaurant/liste-restaurant.component';
import { ListeRestauAdminComponent } from './pages/restaurant/liste-restau-admin/liste-restau-admin.component';
import { ListePlatAdminComponent } from './pages/plat/liste-plat-admin/liste-plat-admin.component';
import { ListePlatModule } from './pages/plat/liste-plat/liste-plat.module';
import { ListePlatComponent } from './pages/plat/liste-plat/liste-plat.component';
// import { AlertModalComponent } from './common/alert-modal/alert-modal.component';
import { CommunModule } from './common/commun/commun.module';
// import { FormulaireRestauComponent } from './pages/restaurant/formulaire-restau/formulaire-restau.component';
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
    // AlertModalComponent
    // FormulaireRestauComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
