import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Achatdto } from 'src/app/model/dto/achatdto.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-achat-list',
  templateUrl: './achat-list.component.html',
  styleUrls: ['./achat-list.component.css']
})
export class AchatListComponent {

  @Input() achatsDataInput$:Observable<AppDataState<Achatdto[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;
}
