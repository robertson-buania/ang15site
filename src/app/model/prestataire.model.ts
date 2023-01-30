import { Adresse } from "./adresse.model";
import { Commande } from "./commande.model";

export interface Prestataire{
  id?:number;
     
  nomcomplet:string;
  tel:string;
  fonction:string;
  adresse:Adresse;
  commandes?:Commande[];
}