import { Produitachat } from "../produitachat.model";

export interface Achatdto{

    id?:number;

    utilisateur_prenom?:string;
    utilisateur_nom?:string;
    montant:number;

    reference:string;
    produitachats:Produitachat[];

    datecreation:Date;

}

