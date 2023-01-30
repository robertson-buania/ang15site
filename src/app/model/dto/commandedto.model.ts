import { Produitcommande } from "../produitcommande.model";

export interface Commandedto{

    id?:number;
    total:number;
    solde:number;
    tel?:string
    numero:string;
    datecreation:Date;
    vendeuse?:string;
  prestataire?:string;
  produitcommandes?:Produitcommande[];

}
