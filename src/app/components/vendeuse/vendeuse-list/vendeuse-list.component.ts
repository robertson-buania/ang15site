import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Vendeuse } from 'src/app/model/vendeuse.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-vendeuse-list',
  templateUrl: './vendeuse-list.component.html',
  styleUrls: ['./vendeuse-list.component.css']
})
export class VendeuseListComponent {
  @Input() vendeusesDataInput$:Observable<AppDataState<Vendeuse[]>> |null=null;

  readonly DataStateEnum=DataStateEnum;
}
