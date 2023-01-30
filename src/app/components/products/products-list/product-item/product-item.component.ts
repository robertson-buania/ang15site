import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(private eventDriverService:EventDriverService){}
  @Input() product:Product | null=null

   
  
  onSelectProduct(p:Product){
    this.eventDriverService.publishEvent({type:ProductActionTypes.SELECTED_PRODUCTS,payload:p})
  }
  onDeleteProduct(p:Product){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DELETE_PRODUCTS,payload:p})
  }

  onUpdateProduct(id:number){ 
   this.eventDriverService.publishEvent({type:ProductActionTypes.UPDATE_PRODUCTS,payload:id})
  }
  onDetailProduct(id:number){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DETAIL_PRODUCT,payload:id})
  }

}
