import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CantineNavbarComponent } from './components/cantine-navbar/cantine-navbar.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { VendeuseComponent } from './components/vendeuse/vendeuse.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';
import { CommandeComponent } from './components/commande/commande.component';
import { AchatComponent } from './components/achat/achat.component';
import { PrestataireListComponent } from './components/prestataire/prestataire-list/prestataire-list.component';
import { PrestataireItemComponent } from './components/prestataire/prestataire-list/prestataire-item/prestataire-item.component';
import { PrestataireAddComponent } from './components/prestataire/prestataire-add/prestataire-add.component';
import { PrestataireEditComponent } from './components/prestataire/prestataire-edit/prestataire-edit.component';
import { PrestataireDetailComponent } from './components/prestataire/prestataire-detail/prestataire-detail.component';
import { VendeuseDetailComponent } from './components/vendeuse/vendeuse-detail/vendeuse-detail.component';
import { CommandeListComponent } from './components/commande/commande-list/commande-list.component';
import { CommandeItemComponent } from './components/commande/commande-list/commande-item/commande-item.component';
import { CommandeAddComponent } from './components/commande/commande-add/commande-add.component';
import { AchatListComponent } from './components/achat/achat-list/achat-list.component';
import { AchatItemComponent } from './components/achat/achat-list/achat-item/achat-item.component';
import { AchatAddComponent } from './components/achat/achat-add/achat-add.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { VendeuseAddComponent } from './components/vendeuse/vendeuse-add/vendeuse-add.component';
import { VendeuseEditComponent } from './components/vendeuse/vendeuse-edit/vendeuse-edit.component';
import { VendeuseItemComponent } from './components/vendeuse/vendeuse-list/vendeuse-item/vendeuse-item.component';
import { VendeuseListComponent } from './components/vendeuse/vendeuse-list/vendeuse-list.component';
import { CommandeFactComponent } from './components/commande/commande-fact/commande-fact.component';
import { CommandePrestataireComponent } from './components/commande/commande-prestataire/commande-prestataire.component';
import { CommandeDetailComponent } from './components/commande/commande-detail/commande-detail.component';
import { CommandeVendeuseComponent } from './components/commande/commande-vendeuse/commande-vendeuse.component';
import { StatistiqueNavComponent } from './components/statistique/statistique-nav/statistique-nav.component';
import { StatistiqueMiddleComponent } from './components/statistique/statistique-middle/statistique-middle.component';
import { StatistiqueGlobalComponent } from './components/statistique/statistique-global/statistique-global.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    VendeuseListComponent,
    VendeuseItemComponent,
    VendeuseAddComponent,
    VendeuseEditComponent,
    CantineNavbarComponent,
    ProductsDetailComponent,
    VendeuseComponent,
    PrestataireComponent,
    CommandeComponent,
    AchatComponent,
    PrestataireListComponent,
    PrestataireItemComponent,
    PrestataireAddComponent,
    PrestataireEditComponent,
    PrestataireDetailComponent,
    VendeuseDetailComponent,
    CommandeListComponent,
    CommandeItemComponent,
    CommandeAddComponent,
    AchatListComponent,
    AchatItemComponent,
    AchatAddComponent,
    StatistiqueComponent,
    CommandeFactComponent,
    CommandePrestataireComponent,
    CommandeVendeuseComponent,
    CommandeDetailComponent,
    StatistiqueNavComponent,
    StatistiqueMiddleComponent,
    StatistiqueGlobalComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
   ReactiveFormsModule,
   NgChartsModule,
   //NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
