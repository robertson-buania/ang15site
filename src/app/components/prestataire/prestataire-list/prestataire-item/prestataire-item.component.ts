import { Component, Input } from '@angular/core';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { Prestataire } from 'src/app/model/prestataire.model';
import { Vendeuse } from 'src/app/model/vendeuse.model';
import { CommandeService } from 'src/app/services/commande.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-prestataire-item',
  templateUrl: './prestataire-item.component.html',
  styleUrls: ['./prestataire-item.component.css']
})
export class PrestataireItemComponent {

  private commandes?:Commandedto[];


  constructor(private eventDriverService:EventDriverService,private commandeService:CommandeService){

  }
  @Input() prestataire:Prestataire | null=null
  somme=0;
  ngOnInit(): void {
    this.commandeService.getAllCommande()
    .subscribe(data=>{
      this.commandes=data

      data.forEach(c=>{
        if(c.prestataire==this.prestataire?.nomcomplet){
          this.somme+=(c.total-c.solde)
        }
      })
    })
  }


  onSelectPrestataire(v:Prestataire){
    this.eventDriverService.publishEvent({type:ProductActionTypes.SELECTED_PRESTATAIRES,payload:v})
  }
  onDeletePrestataire(v:Prestataire){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DELETE_PRESTATAIRES,payload:v})
  }

  onUpdatePrestataire(id:number){
   this.eventDriverService.publishEvent({type:ProductActionTypes.UPDATE_PRESTATAIRES,payload:id})
  }
  onDetailPrestataire(id:number){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DETAIL_PRESTATAIRE,payload:id})
  }
}
