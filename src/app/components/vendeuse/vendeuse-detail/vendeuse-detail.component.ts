import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions } from 'chart.js';
import { Observable, map, startWith, catchError, of } from 'rxjs';
import { Vendeuse } from 'src/app/model/vendeuse.model';
import { ProductsService } from 'src/app/services/products.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-vendeuse-detail',
  templateUrl: './vendeuse-detail.component.html',
  styleUrls: ['./vendeuse-detail.component.css']
})
export class VendeuseDetailComponent {


  public vendeuse$:Observable<AppDataState<Vendeuse>> |null=null;
  productId:number;
  readonly DataStateEnum=DataStateEnum
  
  constructor(private activatedRoute:ActivatedRoute,private vendeuse_prestataireService:VendeusePrestaireService){
    this.productId=activatedRoute.snapshot.params['id'];


  }
  ngOnInit(): void {

    this.vendeuse$=this.vendeuse_prestataireService.getVendeuse(this.productId)
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
