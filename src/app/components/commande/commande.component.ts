import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { CommandeService } from 'src/app/services/commande.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { AppDataState, ActionEvent, ProductActionTypes, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {

  public commandeData$:Observable<AppDataState<Commandedto[]>> |null=null;
 // productName?:string;
  constructor(private commandeService:CommandeService,
    private router:Router,
    private eventDriverService:EventDriverService
    ){}


  ngOnInit(): void {

    this.onGetAllCommandes();
    this.eventDriverService.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );

  }


  onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_COMMANDES: this.onGetAllCommandes();break;
      case ProductActionTypes.NEW_COMMANDES: this.onNewCommande();break;
      //case ProductActionTypes.DELETE_PRODUCTS: this.onDeleteProduct($event.payload);break;
      case ProductActionTypes.DETAIL_COMMANDE: this.onDetailCommande($event.payload);break;
    }
  }
  onGetAllCommandes(){


  this.commandeData$= this.commandeService.getAllCommande()
          .pipe(
              map(dataMap=>
                ( {dataState:DataStateEnum.LOADED,data:dataMap})),
              startWith({dataState:DataStateEnum.LOADINg}),
              catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
          );

  }

  onNewCommande(){
    this.router.navigateByUrl("newCommande")
  }

  onDetailCommande(id:number){
    this.router.navigateByUrl("detailCommande/"+id)
  }
}
