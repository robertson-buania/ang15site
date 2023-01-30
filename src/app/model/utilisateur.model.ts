import { Achat } from "./achat.model";
import { Adresse } from "./adresse.model";

export interface Utilisateur{
    id?:number;
  nompostnom?:string;

    prenom?:string;

    tel?:string;

    password?:string;

    fonction?:string;

    adresse?:Adresse;
  // Achat du User
  achats?:Achat;

}
