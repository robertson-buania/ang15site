import { Prestataire } from "./prestataire.model";
import { Produitcommande } from "./produitcommande.model";
import { Vendeuse } from "./vendeuse.model";

export interface Commande{
  id?:number;
    total:number;
    solde:number;

    numero:string;
    datecreation:Date;
    vendeuse?:Vendeuse;
  prestataire?:Prestataire;
  produitcommandes?:Produitcommande[];

}
