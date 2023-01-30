import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productFormGroup?:FormGroup
  submitted=false;

  constructor(private fb:FormBuilder,private productService:ProductsService){
 
  }
  ngOnInit(): void {
    this.productFormGroup=this.fb.group(
      {
        "name":["",Validators.required],
        "price":[0,Validators.required],
        "quantity":[0,Validators.required],
        "selected":[true],
        "available":[true]
      }
    );
  }
  onSaveProduct(){
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productService.saveProduct(this.productFormGroup?.value)
      .subscribe(data=>{
        alert("Saving on success");
      })
  }

}
