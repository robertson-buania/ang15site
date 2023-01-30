import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Vendeuse } from 'src/app/model/vendeuse.model';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-vendeuse',
  templateUrl: './vendeuse.component.html',
  styleUrls: ['./vendeuse.component.css']
})
export class VendeuseComponent {

  
  public vendeusesData$:Observable<AppDataState<Vendeuse[]>> |null=null;
 // VendeuseName?:string;
  constructor(private vendeusePrestatireService:VendeusePrestaireService,
    private router:Router, 
    private eventDriverService:EventDriverService
    ){}


  ngOnInit(): void {
     
    this.onGetAllVendeuses();
    this.eventDriverService.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );

  }

 
  onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_VENDEUSES: this.onGetAllVendeuses();break;
      case ProductActionTypes.NEW_VENDEUSES: this.onNewVendeuse();break;
      //case ProductActionTypes.DELETE_VendeuseS: this.onDeleteVendeuse($event.payload);break;
      case ProductActionTypes.SEARCH_VENDEUSES: this.onSearchVendeuse($event.payload);break;
      case ProductActionTypes.DETAIL_VENDEUSE: this.onDetailVendeuse($event.payload);break;
     
    }
  }
  onGetAllVendeuses(){

  this.vendeusesData$= this.vendeusePrestatireService.getAllVendeuse()
          .pipe(
              map(dataMap=>
                ( {dataState:DataStateEnum.LOADED,data:dataMap})),
              startWith({dataState:DataStateEnum.LOADINg}),
              catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
          );

  }
 

  onSearchVendeuse(f:any){

    /* this.vendeusesData$= this.vendeusePrestatireService.searchVendeuse(f.VendeuseName)
    .pipe(
        map(dataMap=>
          ( {dataState:DataStateEnum.LOADED,data:dataMap})),
        startWith({dataState:DataStateEnum.LOADINg}),
        catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
    ); */

  }

  onDetailVendeuse(id:number){
    return this.router.navigateByUrl('/detailVendeuse/'+id)
  }

  onNewVendeuse(){
    return this.router.navigateByUrl('/newVendeuse')
  }
  onUpdateProduct(id:number){
    return this.router.navigateByUrl('/editProduct/'+id)
  }

}
