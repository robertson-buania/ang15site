import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commandedto } from 'src/app/model/dto/commandedto.model';
import { Prestatairedto } from 'src/app/model/dto/prestatairedto.model';
import { ProductSaved } from 'src/app/model/productsaved.model';
import { Produitcommande } from 'src/app/model/produitcommande.model';
import { CommandeService } from 'src/app/services/commande.service';
import { ProductsService } from 'src/app/services/products.service';
import { VendeusePrestaireService } from 'src/app/services/vendeuse-prestataire.service';

@Component({
  selector: 'app-commande-fact',
  templateUrl: './commande-fact.component.html',
  styleUrls: ['./commande-fact.component.css']
})
export class CommandeFactComponent {

  vendeuse=true;
  prestataire=false;

  ngOnInit(): void {
    this.vendeuse=true;
   this.prestataire=false;
  }
  commande(commande:string){
    if(commande=="vendeuse") {
      this.vendeuse=true,
      this.prestataire=false
    }else {
      this.vendeuse=false,
      this.prestataire=true
    }
  }
}
