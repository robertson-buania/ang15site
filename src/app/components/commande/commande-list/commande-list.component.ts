import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent {

  @Input() commandedtoDataInput$:Observable<AppDataState<Commandedto[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;
}
