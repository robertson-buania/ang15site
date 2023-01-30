import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatAddComponent } from './components/achat/achat-add/achat-add.component';
import { AchatComponent } from './components/achat/achat.component';
import { CommandeAddComponent } from './components/commande/commande-add/commande-add.component';
import { CommandeComponent } from './components/commande/commande.component';
import { PrestataireAddComponent } from './components/prestataire/prestataire-add/prestataire-add.component';
import { PrestataireDetailComponent } from './components/prestataire/prestataire-detail/prestataire-detail.component';
import { PrestataireEditComponent } from './components/prestataire/prestataire-edit/prestataire-edit.component';
import { PrestataireComponent } from './components/prestataire/prestataire.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { VendeuseDetailComponent } from './components/vendeuse/vendeuse-detail/vendeuse-detail.component';
import { VendeuseComponent } from './components/vendeuse/vendeuse.component';
import { VendeuseAddComponent } from './components/vendeuse/vendeuse-add/vendeuse-add.component';
import { VendeuseEditComponent } from './components/vendeuse/vendeuse-edit/vendeuse-edit.component';
import { CommandeFactComponent } from './components/commande/commande-fact/commande-fact.component';
import { CommandeDetailComponent } from './components/commande/commande-detail/commande-detail.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';

const routes: Routes = [

  {path:"",component:CommandeComponent},
  {path:"produits",component:ProductsComponent },

  {path:"newProduct",component:ProductsAddComponent},
  {path:"editProduct/:id",component:ProductsEditComponent},
  {path:"detailProduct/:id",component:ProductsDetailComponent},

  /**
   * Vendeuse
   */
  {path:"vendeuse",component:VendeuseComponent },

  {path:"newVendeuse",component:VendeuseAddComponent},
  {path:"editVendeuse/:id",component:VendeuseEditComponent},
  {path:"detailVendeuse/:id",component:VendeuseDetailComponent},
  /**
   * Prestatire
   */
   {path:"prestataire",component:PrestataireComponent },

   {path:"newPrestataire",component:PrestataireAddComponent},
   {path:"editPrestataire/:id",component:PrestataireEditComponent},
   {path:"detailPrestataire/:id",component:PrestataireDetailComponent},

   /**
   * Commande
   */
    {path:"commande",component:CommandeComponent },

    {path:"newCommande",component:CommandeFactComponent},
    {path:"detailCommande/:id",component:CommandeDetailComponent},

     /**
   * Achat
   */
      {path:"achat",component:AchatComponent },
      {path:"newachat",component:AchatAddComponent },

      {path:"newAchat",component:AchatAddComponent},

      /**
       * Stats
       */
      {path:"stats",component:StatistiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
