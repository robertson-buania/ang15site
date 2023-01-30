import { Commande } from "./commande.model";
import { Nomproduit } from "./nomproduit.model";

export interface Produitcommande{
    id?:number;
      prix:number;
      quantite:number;
      unite:string;
      prixachat:number;
      datecreation:Date;
    // Nom produit
      nomproduit?:Nomproduit;

    // Commande
      commande?:Commande;

}
