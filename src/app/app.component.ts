import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang15site';
  commande=true;
  stats=false;
  prestataire=false;
  employe=false;
  produit=false;
  achat=false

  onActive(value:string){
    if(value=="commande"){
      this.commande=true;
      this.stats=false;
      this.prestataire=false;
      this.employe=false;
      this.produit=false;
      this.achat=false
    }else if(value=="stats"){
      this.commande=false;
      this.stats=true;
      this.prestataire=false;
      this.employe=false;
      this.produit=false;
      this.achat=false
    }else if(value=="prestataire"){
      this.commande=false;
      this.achat=false
      this.stats=false;
      this.prestataire=true;
      this.employe=false;
      this.produit=false;
    }else if(value=="employe"){
      this.commande=false;
      this.stats=false;
      this.prestataire=false;
      this.achat=false
      this.employe=true;
      this.produit=false;
    }else if(value=="produit"){
      this.commande=false;
      this.stats=false;
      this.prestataire=false;
      this.employe=false;
      this.achat=false
      this.produit=true;
    }
    else if(value=="achat"){
      this.commande=false;
      this.stats=false;
      this.prestataire=false;
      this.employe=false;
      this.achat=true
      this.produit=false;
    }
  }
}
