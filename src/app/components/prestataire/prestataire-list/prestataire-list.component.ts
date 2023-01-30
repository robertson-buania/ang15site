import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestataire } from 'src/app/model/prestataire.model';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-prestataire-list',
  templateUrl: './prestataire-list.component.html',
  styleUrls: ['./prestataire-list.component.css']
})
export class PrestataireListComponent {
  @Input() prestatairesDataInput$:Observable<AppDataState<Prestataire[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;

  constructor(private presServ:VendeusePrestaireService){
    
  }

}
