import { Achat } from "./achat.model";
import { Nomproduit } from "./nomproduit.model";

export interface Produitachat{
     id?:number;
      quantite:number;
      prix:number;
      unite?:string;
      nomproduit?:Nomproduit;
      achat?:Achat;
      datecreation:Date;
}
