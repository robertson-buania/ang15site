import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductSaved } from 'src/app/model/productsaved.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent {

 productFormGroup?:FormGroup
  submitted=false;

  constructor(private fb:FormBuilder,private productService:ProductsService){

  }
  ngOnInit(): void {
   this.extincteur()
  }
  onSaveProduct(){
    this.submitted=true;



    if(this.productFormGroup?.invalid) return;
    const produit:ProductSaved={
      nomproduit: this.productFormGroup?.value['nomcomplet'],
      prixachat:this.productFormGroup?.value["prixachat"],
      prixprestataire:this.productFormGroup?.value["prixprestataire"],
      prixvente:this.productFormGroup?.value["prixvente"],
      quantite:this.productFormGroup?.value["quantite"],
      datecreation:new Date(),
      quantitecontenanceparunite:this.productFormGroup?.value["quantitecontenanceparunite"],
      quantiterupture:this.productFormGroup?.value["quantiterupture"],
      unite:this.productFormGroup?.value["unite"]
    }
    this.productService.saveProduct(produit)
      .subscribe(data=>{
        alert("Enregistré avec succès");
        this.extincteur()
      })
  }

  extincteur(){
    this.productFormGroup=this.fb.group(
      {
        //"observation",
        quantite:["",Validators.required],
        unite:["pièce",Validators.required],
        quantitecontenanceparunite:[1,Validators.required],
        quantiterupture:[0,Validators.required],
        prixachat:[0,Validators.required],
        prixvente:[0,Validators.required],
        prixprestataire:[0,Validators.required],
        nomcomplet:["",Validators.required]
      }
    );
  }
}
