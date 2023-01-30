import { Component, Input } from '@angular/core';
import { Achatdto } from 'src/app/model/dto/achatdto.model';

@Component({
  selector: 'app-achat-item',
  templateUrl: './achat-item.component.html',
  styleUrls: ['./achat-item.component.css']
})
export class AchatItemComponent {

  @Input() achatdto:Achatdto | null=null



}
