import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  productFormGroup?:FormGroup
  submitted=false;
  product?:Product;
  productId:number;

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private productService:ProductsService){
    this.productId=activatedRoute.snapshot.params['id'];


  }
  ngOnInit(): void {
    this.productService.getProduct(this.productId)
    .subscribe(p=>{
      this.product=p;
      this.productFormGroup=this.fb.group(
        {
          id:[this.product?.id,Validators.required],
          name:[this.product?.name,Validators.required],
          price:[this.product?.price,Validators.required],
          quantity:[this.product?.quantity,Validators.required],
          selected:[this.product?.selected,Validators.required],
          available:[this.product?.available,Validators.required]
        }
      );
    });
  }
  onUpdateProduct(){
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productService.updateProduct(this.productFormGroup?.value)
      .subscribe(data=>{
        alert("Updating on success");
      })
  }

}
