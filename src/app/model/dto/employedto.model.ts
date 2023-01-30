import { Adresse } from "../adresse.model";

export interface Prestataire{
  id?:number;
  nomcomplet:string;
  tel:string;
  fonction:string;
  adresse:Adresse;
  commandetotal:number;
}
