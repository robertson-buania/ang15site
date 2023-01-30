import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductSaved } from 'src/app/model/productsaved.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {


  productFormGroup?:FormGroup
  submitted=false;
  product?:Product;
  productId:number;

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router
    ,private fb:FormBuilder,private productService:ProductsService){
    this.productId=activatedRoute.snapshot.params['id'];


  }
  ngOnInit(): void {
    this.productService.getProduct(this.productId)
    .subscribe(p=>{
      this.product=p;
      this.productFormGroup=this.fb.group(
        {

            //"observation",
            quantite:[p.quantite,Validators.required],
            unite:[p.unite,Validators.required],
            quantitecontenanceparunite:[p.quantitecontenanceparunite,Validators.required],
            quantiterupture:[p.quantiterupture,Validators.required],
            prixachat:[p.prixachat,Validators.required],
            prixvente:[p.prixvente,Validators.required],

            prixprestataire:[p.prixprestataire,Validators.required],
            nomcomplet:[p.nomproduit.nom,Validators.required]

        }
      );
    });
  }
  onUpdateProduct(){
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productService.updateProduct(this.productId,this.productFormGroup?.value)
      .subscribe(data=>{
        alert("Updating on success");
        this.router.navigateByUrl("produits")
      })
  }

}
