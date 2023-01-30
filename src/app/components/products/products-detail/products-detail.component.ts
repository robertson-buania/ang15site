import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {

  public product$:Observable<AppDataState<Product>> |null=null;
  productId:number;
  readonly DataStateEnum=DataStateEnum

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductsService){
    this.productId=activatedRoute.snapshot.params['id'];


  }
  ngOnInit(): void {

    this.product$=this.productService.getProduct(this.productId)
        .pipe(
          map(dataMap=>
            ( {dataState:DataStateEnum.LOADED,data:dataMap})),
          startWith({dataState:DataStateEnum.LOADINg}),
          catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
      );
      //console.log(this.product$)
  }
}
