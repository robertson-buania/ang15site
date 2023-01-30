import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductAddComponent } from "./components/products/product-add/product-add.component";
import { ProductEditComponent } from "./components/products/product-edit/product-edit.component";
import { ProductsComponent } from "./components/products/products.component";

const routes:Routes=
[
  {path:"products",component:ProductsComponent },
  {path:"",component:HomeComponent},
  {path:"newProduct",component:ProductAddComponent},
  {path:"editProduct/:id",component:ProductEditComponent}
]
@NgModule(
{
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[]
}
)
 export class AppRoutingModule{}
