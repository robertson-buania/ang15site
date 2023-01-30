import { Adresse } from "./adresse.model";
import { Commande } from "./commande.model";

export interface Vendeuse{

     id?:number;

    nomcomplet:string;
    tel?:string;

    adresse?:Adresse;
    commandes?:Commande[];

}
