import { Component } from '@angular/core';

@Component({
  selector: 'app-cantine-navbar',
  templateUrl: './cantine-navbar.component.html',
  styleUrls: ['./cantine-navbar.component.css']
})
export class CantineNavbarComponent {

  connect=false


  connec(){
    this.connect=!this.connect
  }
}
