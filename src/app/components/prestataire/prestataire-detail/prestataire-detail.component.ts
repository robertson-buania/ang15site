import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Prestataire } from 'src/app/model/prestataire.model';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-prestataire-detail',
  templateUrl: './prestataire-detail.component.html',
  styleUrls: ['./prestataire-detail.component.css']
})
export class PrestataireDetailComponent {

  public vendeuse$:Observable<AppDataState<Prestataire>> |null=null;
  productId:number;
  readonly DataStateEnum=DataStateEnum

  constructor(private activatedRoute:ActivatedRoute,private vendeuse_prestataireService:VendeusePrestaireService){
    this.productId=activatedRoute.snapshot.params['id'];


  }
  ngOnInit(): void {

    this.vendeuse$=this.vendeuse_prestataireService.getPrestataire(this.productId)
        .pipe(
          map(dataMap=>
            ( {dataState:DataStateEnum.LOADED,data:dataMap})),
          startWith({dataState:DataStateEnum.LOADINg}),
          catchError(error=>of({dataState:DataStateEnum.ERROR,errorMessage:error.message}))
      );
      //console.log(this.product$)
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
