import { Component, Input } from '@angular/core';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-commande-item',
  templateUrl: './commande-item.component.html',
  styleUrls: ['./commande-item.component.css']
})
export class CommandeItemComponent {
  constructor(private eventDriverService:EventDriverService){}
  @Input() commandedto:Commandedto | null=null


  onDetailCommande(id:number){
    this.eventDriverService.publishEvent({type:ProductActionTypes.DETAIL_COMMANDE,payload:id})
  }

}
