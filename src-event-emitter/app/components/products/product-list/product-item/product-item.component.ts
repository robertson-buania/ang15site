import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product:Product | null=null
  @Output() productActionEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>()

  onSelectProduct(p:Product){
    this.productActionEventEmitter.emit({type:ProductActionTypes.SELECTED_PRODUCTS,payload:p})
  }
  onDeleteProduct(p:Product){
    this.productActionEventEmitter.emit({type:ProductActionTypes.DELETE_PRODUCTS,payload:p})
  }
 
  onUpdateProduct(id:number){
    //0892859204
    this.productActionEventEmitter.emit({type:ProductActionTypes.UPDATE_PRODUCTS,payload:id})
  }

}
