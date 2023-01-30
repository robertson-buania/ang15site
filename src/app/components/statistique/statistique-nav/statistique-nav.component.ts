import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistique-nav',
  templateUrl: './statistique-nav.component.html',
  styleUrls: ['./statistique-nav.component.css']
})
export class StatistiqueNavComponent {

  @Input()
  sommeglobal?:number ;
  @Input()
   sommeprestataire?:number;
   @Input()
   sommevendeuse?:number;
   @Input()
   sommeNombre?:number;

   @Input()
   sommeRevenuglobal?:number

   @Input()
   resteASolder?:number

   @Input()
   sommeAchats?:number
}
