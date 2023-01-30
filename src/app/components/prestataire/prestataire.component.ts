import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Prestataire } from 'src/app/model/prestataire.model';
import { CommandeService } from 'src/app/services/commande.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { AppDataState, ActionEvent, ProductActionTypes, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html',
  styleUrls: ['./prestataire.component.css']
})
export class PrestataireComponent {


  public prestatairesData$:Observable<AppDataState<Prestataire[]>> |null=null;
 // VendeuseName?:string;
  constructor(private vendeusePrestatireService:VendeusePrestaireService,
    private router:Router,
    private eventDriverService:EventDriverService,
    private commandeService:CommandeService
    ){}


  ngOnInit(): void {

    this.onGetAllPrestataires();
    this.eventDriverService.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );

  }

  onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_PRESTATAIRES: this.onGetAllPrestataires();break;
      case ProductActionTypes.NEW_PRESTATAIRES: this.onNewPrestataire();break;
      //case ProductActionTypes.DELETE_VendeuseS: this.onDeleteVendeuse($event.payload);break;
      case ProductActionTypes.SEARCH_PRESTATAIRES: this.onSearchPrestataire($event.payload);break;
      case ProductActionTypes.DETAIL_PRESTATAIRE: this.onDetailPrestataire($event.payload);break;

    }
  }
  onGetAllPrestataires(){

  this.prestatairesData$= this.vendeusePrestatireService.getAllPrestataire()
          .pipe(
              map(dataMap=>
                ( {dataState:DataStateEnum.LOADED,data:dataMap})),
              startWith({dataState:DataStateEnum.LOADINg}),
              catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
          );
  }


  onSearchPrestataire(f:any){

    /* this.vendeusesData$= this.vendeusePrestatireService.searchVendeuse(f.VendeuseName)
    .pipe(
        map(dataMap=>
          ( {dataState:DataStateEnum.LOADED,data:dataMap})),
        startWith({dataState:DataStateEnum.LOADINg}),
        catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
    ); */

  }

  onDetailPrestataire(id:number){
    return this.router.navigateByUrl('/detailPrestataire/'+id)
  }

  onNewPrestataire(){
    return this.router.navigateByUrl('/newPrestataire')
  }
  onUpdateProduct(id:number){
    return this.router.navigateByUrl('/editProduct/'+id)
  }

}
