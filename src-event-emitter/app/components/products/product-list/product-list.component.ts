import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productsDataInput$:Observable<AppDataState<Product[]>> |null=null;

   readonly DataStateEnum=DataStateEnum;

   @Output() productActionEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>()

   onActionEventProductList($event:ActionEvent){
    this.productActionEventEmitter.emit($event);
   }


}
