import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Achatdto } from 'src/app/model/dto/achatdto.model';
import { AchatService } from 'src/app/services/achat.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { AppDataState, ActionEvent, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent {
  public achatsData$:Observable<AppDataState<Achatdto[]>> |null=null;
  // productName?:string;
   constructor(private achatService:AchatService,
    private router:Router,
     private eventDriverService:EventDriverService
     ){}


   ngOnInit(): void {

     this.onGetAllAllAchats();
     this.eventDriverService.sourceSubjectObservable.subscribe(
       (actionEvent:ActionEvent)=>{
         this.onActionEvent(actionEvent)
       }
       );

   }

   onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_ACHATS: this.onGetAllAllAchats();break;
      case ProductActionTypes.NEW_ACHATS:this.onNewAchat();break;
    }
  }
  onGetAllAllAchats(){

  this.achatsData$= this.achatService.getAllAchats()
          .pipe(
              map(dataMap=>
                ( {dataState:DataStateEnum.LOADED,data:dataMap})),
              startWith({dataState:DataStateEnum.LOADINg}),
              catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
          );

  }

  onNewAchat(){
    return this.router.navigateByUrl('/newAchat')
  }
}
