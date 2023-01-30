import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Observable } from 'rxjs';
import { Commandedto } from 'src/app/model/dto/commandedto.model';

@Component({
  selector: 'app-statistique-middle',
  templateUrl: './statistique-middle.component.html',
  styleUrls: ['./statistique-middle.component.css']
})
export class StatistiqueMiddleComponent {

  title = 'ng2-charts-demo';

   days: number[]=[]
   @Input()
   commandesListMoisActuel?:Observable<Commandedto[]>
   daysMontant: number[]=[]
  currentYear?:number;
  currentMonth?:number
  constructor(){
    this.currentYear=new Date().getFullYear();
    this.currentMonth=new Date().getMonth()+1;
  }
  ngOnInit(): void {
    console.log("azazazaza",this.commandesListMoisActuel)

    /*this.fullDaysOfMonth(new Date().getFullYear(),new Date().getMonth()).forEach(date=>{
      this.days.push(date.getDate())
    })*/
    this.commandesListMoisActuel?.subscribe(data=>{
          data.forEach(c=>{
            this.daysMontant.push(c.total)
          })
        })

  }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.days,
    datasets: [
      {
        data: this.daysMontant,
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  fullDaysOfMonth(year:number,month:number){

    const date=new Date(year,month,1)
    const dates=[];
    while(date.getMonth()===month){
      dates.push(new Date(date));
      date.setDate(date.getDate()+1);
    }
    return dates;
  }
}
