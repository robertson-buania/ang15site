import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productsData$:Observable<AppDataState<Product[]>> |null=null;
 // productName?:string;
  constructor(private productService:ProductsService,
    private router:Router,
    private eventDriverService:EventDriverService
    ){}


  ngOnInit(): void {

    this.onGetAllProducts();
    this.eventDriverService.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );

  }


  onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_PRODUCTS: this.onGetAllProducts();break;
      case ProductActionTypes.NEW_PRODUCTS: this.onNewProduct();break;
      //case ProductActionTypes.DELETE_PRODUCTS: this.onDeleteProduct($event.payload);break;
      case ProductActionTypes.SEARCH_PRODUCTS: this.onSearchProduct($event.payload);break;
      case ProductActionTypes.DETAIL_PRODUCT: this.onDetailProduct($event.payload);break;
      case ProductActionTypes.UPDATE_PRODUCTS: this.onUpdateProduct($event.payload);break;
    }
  }
  onGetAllProducts(){

  this.productsData$= this.productService.getAllProducts()
          .pipe(
              map(dataMap=>
                ( {dataState:DataStateEnum.LOADED,data:dataMap})),
              startWith({dataState:DataStateEnum.LOADINg}),
              catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
          );

  }


  onSearchProduct(f:any){

    this.productsData$= this.productService.searchProduct(f.productName)
    .pipe(
        map(dataMap=>
          ( {dataState:DataStateEnum.LOADED,data:dataMap})),
        startWith({dataState:DataStateEnum.LOADINg}),
        catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
    );

  }

  onDetailProduct(id:number){
    return this.router.navigateByUrl('/detailProduct/'+id)
  }

 /* onSelectProduct(p:Product){
    this.productService.selectProduct(p)
    .subscribe(data=>{
      p=data;
    })
  }*/
  /*onDeleteProduct(p:Product){
    let v=confirm("Etës-vous sür ?");
    if(v)
    this.productService.deleteProduct(p)
    .subscribe(()=>{
      this.onGetAllProducts();
    })
  }*/
  onNewProduct(){
    return this.router.navigateByUrl('/newProduct')
  }
  onUpdateProduct(id:number){
    return this.router.navigateByUrl('/editProduct/'+id)
  }

}
