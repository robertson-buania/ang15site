import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Vendeuse } from 'src/app/model/vendeuse.model';
import { CommandeService } from 'src/app/services/commande.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-vendeuse-item',
  templateUrl: './vendeuse-item.component.html',
  styleUrls: ['./vendeuse-item.component.css']
})
export class VendeuseItemComponent {

  somme=0;
  constructor(private eventDriverService:EventDriverService,
    private commandeService:CommandeService){}
  @Input() vendeuse:Vendeuse | null=null



  ngOnInit(): void {
    this.commandeService.getAllCommande()
    .subscribe(data=>{


      data.forEach(c=>{
        if(c.vendeuse==this.vendeuse?.nomcomplet){
          this.somme+=(c.total-c.solde)
        }
      })
    })
  }
  onSelectVendeuse(v:Vendeuse){
    this.eventDriverService.publishEvent({type:ProductActionTypes.SELECTED_VENDEUSES,payload:v})
  }
  onDeleteVendeuse(v:Vendeuse){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DELETE_VENDEUSES,payload:v})
  }

  onUpdateVendeuse(id:number){
   this.eventDriverService.publishEvent({type:ProductActionTypes.UPDATE_VENDEUSES,payload:id})
  }
  onDetailVendeuse(id:number){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DETAIL_VENDEUSE,payload:id})
  }
}
