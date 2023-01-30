import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent {

@Output()
  productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>()

  ongetAllProducts(){

    this.productEventEmitter.emit({type:ProductActionTypes.GET_ALL_PRODUCTS})
    }
    ongetSelectedProducts(){
      this.productEventEmitter.emit({type:ProductActionTypes.GET_SELECTED_PRODUCTS})
    }
    ongetAvailableProducts(){
      this.productEventEmitter.emit({type:ProductActionTypes.GET_AVAILABLE_PRODUCTS})
    }

    onSearchProduct(dataForm:any){
      this.productEventEmitter.emit({type:ProductActionTypes.SEARCH_PRODUCTS,payload:dataForm})
    }

    onNewProduct(){
      this.productEventEmitter.emit({type:ProductActionTypes.NEW_PRODUCTS})
    }
}
