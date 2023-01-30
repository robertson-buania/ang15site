import { Produitachat } from "./produitachat.model";
import { Utilisateur } from "./utilisateur.model";

export interface Achat{
    id?:number;
    utilisateur?:Utilisateur;
    montant:number;
    reference:string;
    datecreation:Date,
    produitachats?:Produitachat[] ;

}
