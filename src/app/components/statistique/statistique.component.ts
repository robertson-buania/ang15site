import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { map, startWith, catchError, of, Observable } from 'rxjs';
import { Achat } from 'src/app/model/achat.model';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { AchatService } from 'src/app/services/achat.service';
import { CommandeService } from 'src/app/services/commande.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ActionEvent, ProductActionTypes, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
  dataChartsdays?:number[]
  // Commandes
   sommeglobal=0;
   sommeprestataire=0;
   sommevendeuse=0;
   sommeNombre=0;

   //Revenus
   sommeRevenuglobal=0;
   sommeRevenureel=0;
   sommeRevenustagnant=0;

   // Achats

   sommeAchats=0;
   // Reste à solder

   resteASolder=0;
    sommeSolde=0;


  achatsList?:Achat[]
  commandesListMoisActuel:Observable<Commandedto[]>|null=null;

  commandesListActuel?:Commandedto[];

  constructor (private achatService:AchatService,
    private commandeService:CommandeService){}

  ngOnInit(): void {
    this.onGetAllCommandes();
    this.achatMoisActuel()
  }


  onActionEvent($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_COMMANDES: this.onGetAllCommandes();break;
    }
  }
  onGetAllCommandes(){
  const now=new Date()


  this.commandesListMoisActuel=this.commandeService.getAllCommande().pipe(map(comm=>comm))
  this.commandeService.getAllCommande()
          .subscribe(data=>{

           // data;
            this.commandesListActuel=
            data.filter(
              (commande:Commandedto) =>
              (new Date(commande.datecreation).getFullYear() ===
            now.getFullYear() &&

            new Date(commande.datecreation).getMonth() ===
            now.getMonth())

            )

            this.sommeNombre=this.commandesListActuel?.length

            this.commandesListActuel.forEach(c=>{
              this.sommeSolde+=c.solde
            /*  this.sommeglobal+=c.total;
              if(c.vendeuse){
                this. sommevendeuse+=c.total
              }else if(c.prestataire){
                this. sommeprestataire+=c.total
              }*/
              c.produitcommandes?.forEach(prod=>{
                /* Commandes
                Les calcules opérés sont uniquement pour les commandes
                */
               this.sommeglobal+=(prod.prix*prod.quantite);
                this.sommeRevenuglobal+= ((prod.prix*prod.quantite)-(prod.prixachat*prod.quantite))


             if(c.vendeuse){
               this. sommevendeuse+=(prod.prix*prod.quantite)
//
             }else if(c.prestataire){
               this. sommeprestataire+=(prod.prix*prod.quantite)
             }
             })
            })
            this.resteASolder=this.sommeglobal-this.sommeSolde
          })

  }
  achatMoisActuel(){
this.sommeAchats=0
    this.achatService.getAllAchats().subscribe(
      data=>{
        data.forEach(a=>{
         this.sommeAchats+= a.montant
         console.log(a)
        })
      }
    )
    /*const now=new Date();
   const achatMoisActuelList= this.achatsList?.filter((achat) =>(achat.datecreation.getFullYear() === now.getFullYear() &&
    achat.datecreation.getMonth() === now.getMonth()))


    return achatMoisActuelList;*/
  }

  achatSemaineActuel(){

  }

   fullDaysOfMonth(year:number,month:number){
    const datesdays={
      dates:[],
      days:[]
    }
    const days=[]
    const date=new Date(year,month,1)
    const dates=[];
    while(date.getMonth()===month){
      dates.push(new Date(date));
     // days.push(date.getDate())
      date.setDate(date.getDate()+1);

    }
    return dates;
  }


}
